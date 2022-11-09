if(!eval("globalConfig")){
    console.error("未找到配置！");
    debugger;
}

/**
 * 网页尺寸/运算尺寸
 */
const pxRatio = screen.width / globalConfig.workWidth;

// 若不设置时区，以当前时区运算
// 不使用Unix时间戳时无效
globalConfig.timeZoneOffset = globalConfig.timeZoneOffset || new Date().getTimezoneOffset();
const startTime = globalConfig.startTime ? parseTime(globalConfig.startTime) : parseTime("5:00");
const endTime = globalConfig.endTime ? parseTime(globalConfig.endTime) : parseTime("23:00");

if(globalConfig.hideFPS){
    $(".fps").hide();
}

//时刻表预处理
for(var i in globalConfig.timetable){
    var ti = globalConfig.timetable[i];
    for(var j in ti.nodes){
        ti.nodes[j][0] = parseTime(ti.nodes[j][0]);
    }
    globalConfig.timetable[i] = ti;
}

//时刻表偏移
for(var i in globalConfig.timetable){
    var ti = globalConfig.timetable[i];
    if(ti.offsetFrom){
        ti.nodes = [];
        for(var j = 0; j < i; j++){
            var tj = globalConfig.timetable[j]
            if(tj.name == ti.offsetFrom){
                var tjn = tj.nodes;
                for(var k in tjn){
                    ti.nodes[k] = [];
                    ti.nodes[k][0] = tjn[k][0] + (parseTime(ti.depature) - tjn[0][0]);
                    ti.nodes[k][1] = tjn[k][1];
                }
            }
        }
    }
}

function displayTime(time){
    $(".time_display").text(
        (Math.floor(time / 3600) % 24 + "").padStart(2, "0")
         + " : "
          + (Math.floor(time / 60) % 60 + "").padStart(2, "0")
    );
}

/**
 * 初始化，具体内容包含：
 * - 背景设置、屏幕尺寸缩放（实际运行时请全屏）
 * - 列车图标、标签生成
 */
function init(){
    if(!globalConfig.background){
        console.warn("未指定背景！");
    }
    $(".work_area")
        .css("width", screen.width)
        .css("height", globalConfig.workHeight * pxRatio)
        .css("background", `url(${globalConfig.background})`);
    for(var i in globalConfig.timetable){
        var d = $("<div>")
            .addClass("moving_element")
            .addClass("moving_element_" + i)
            .css("width", globalConfig.picSize * pxRatio);
        var img = $("<img>")
            .attr("src", globalConfig.timetable[i].file)
            .css("width", globalConfig.picSize * pxRatio)
            .css("height", globalConfig.picSize * pxRatio);
        d.append(img);
        var p = $("<p>")
            .text(globalConfig.timetable[i].name)
            .addClass("moving_element_tag")
            .css("width", globalConfig.picSize * pxRatio)
            .css("font-size", globalConfig.picSize * pxRatio / globalConfig.timetable[i].name.length)
            .css("background", globalConfig.timetable[i].textBackgronud || globalConfig.defaultTextBackground)
            .css("color", globalConfig.timetable[i].textColor || globalConfig.defaultTextColor);
        d.append(p);
        $(".work_area").append(d);
    }
    $(".time_display")
        .css("left", globalConfig.timePosition[0] * pxRatio)
        .css("top", globalConfig.timePosition[1] * pxRatio);
    displayTime(startTime);
}


/**
 * 解析时间。
 * 
 * 注：如果需要制作夜宵线等跨0:00的运行图，请将时间以"25:00"等形式表示。
 * 时间戳解析采用直接取余，因此这种情况下不能直接输入时间戳。
 * 
 * 注2：若输入的对象具有`getHours()`、`getminutes()`方法，该函数就会将输入作为`Date`对象处理。
 * @param {Date|String|number} input `Date`对象、常见格式时间字符串（允许多余空格）、时间戳（毫秒）
 * @returns {number} 秒数，指自当地时区0:00到该时间经过的秒数。若无法解析，返回`-1`。
 */
function parseTime(input){
    if(isNaN(input)){
        // Date对象或其他可以解释为Date的对象
        if(input.getHours && input.getHours instanceof Function
            && input.getMinutes && input.getMinutes instanceof Function){
                return input.getHours() * 3600
                    + input.getMinutes() * 60
                    + (input.getSeconds 
                        && input.getSeconds instanceof Function 
                        && input.getSeconds());
        }
        // String
        if(input.replace){
            input = input.replace(/\s/g, "");
        }
        const timePatterns = [
            [/^([0-9]{1,2})[:：时]([0-9]{2})分?([:：]([0-9]{2})秒?)?$/, (match) => {
                return Number.parseInt(match[1]) * 3600
                    + Number.parseInt(match[2]) * 60
                    + (Number.parseInt(match[4]) || 0);
            }],
            [/^(凌晨|早上|清晨|早晨|上午|am|AM)([0-9]{1,2})[:：时]([0-9]{2})分?([:：]([0-9]{2})秒?)?$/, (match) => {
                return Number.parseInt(match[2]) * 3600
                    + Number.parseInt(match[3]) * 60
                    + (Number.parseInt(match[5]) || 0);
            }],
            [/^(下午|晚上?|傍晚|pm|PM)([0-9]{1,2})[:：时]([0-9]{2})分?([:：]([0-9]{2})秒?)?$/, (match) => {
                return Number.parseInt(match[2] % 12 + 12) * 3600
                    + Number.parseInt(match[3]) * 60
                    + (Number.parseInt(match[5]) || 0);
            }],
            [/^([0-9]{1,2})[:：时]([0-9]{2})分?([:：]([0-9]{2})秒?)?[Aa][Mm]$/, (match) => {
                return Number.parseInt(match[1]) * 3600
                    + Number.parseInt(match[2]) * 60
                    + (Number.parseInt(match[4]) || 0);
            }],
            [/^([0-9]{1,2})[:：时]([0-9]{2})分?([:：]([0-9]{2})秒?)?[Pp][Mm]$/, (match) => {
                return Number.parseInt(match[1] % 12 + 12) * 3600
                    + Number.parseInt(match[2]) * 60
                    + (Number.parseInt(match[4]) || 0);
            }]
        ];
        for(var i in timePatterns){
            var match = input.match(timePatterns[i][0]);
            if(match){
                return timePatterns[i][1](match);
            }
        }
    }else{
        if(input < 24 * 3600){
            return input;
        }
        return (input + globalConfig.timeZoneOffset * 60000) % (24 * 3600 * 1000) / 1000;
    }
    return -1;
}

/**
 * 定比分点
 * @param {number[]} node1 点1 
 * @param {number[]} node2 点2 
 * @param {number} ratio 比例
 * @returns {number[]} 定比分点
 */
function pointOnLine(node1, node2, ratio){
    return [
        node1[0] + ratio * (node2[0] - node1[0]),
        node1[1] + ratio * (node2[1] - node1[1])
    ]
}

/**
 * 点间距
 * @param {number[]} node1 点1
 * @param {number[]} node2 点2
 * @returns {number} 两点之间的距离
 */
function distanceBetween(node1, node2){
    return Math.sqrt(
        (node1[0] - node2[0]) * (node1[0] - node2[0]) +
        (node1[1] - node2[1]) * (node1[1] - node2[1])
    );
}

/**
 * 确定一列车在某个时间的位置。
 * @param {{nodes: [Date|String|number, number|number[]]}} train 列车对象，其中，`nodes`数组中的元素必须满足：
 * - 第一个元素（`Date|String|Number`）：可以作为`parseTime()`的输入。
 * - 第二个元素（`number|number[]`）：可以是`number`，此时函数从`line`数组读取对应坐标；或直接以`number[2]`方式给出（原始背景上的）坐标
 * ，但此时函数不会将列车位置沿线路排布。
 * @param {number[][]} line 线路坐标数组。
 * @param {number} time 时间（`parseTime()`的输出）
 * @returns {number[]} 最终的坐标（在原始背景上）。本函数不负责坐标转换。
 */
function findPositionFor(train, line, time){
    /**
     * 内部函数，解析`nodes`元素对应的节点
     * @param {number|number[]} n 节点参数
     * @returns {number[]} 节点坐标。
     */
    function getNodeInLine(n){
        if(n.length){
            return n;
        }else{
            return line[n];
        }
    }
    var nodes = train.nodes;
    // 1. 时间特例（发车前/终到后）
    if(time <= nodes[0][0]){
        return getNodeInLine(nodes[0][1]);
    }else if(time >= nodes[nodes.length - 1][0]){
        return getNodeInLine(nodes[nodes.length - 1][1]);
    }
    // 2. 时间节点确定
    // (leftnode) 当前时间 rightnode
    var rightNode = 1;
    while(time > nodes[rightNode][0]){
        rightNode ++;
    }
    //3.如果有直接给出坐标的点或前后空间位置相邻
    var lastNode = nodes[rightNode - 1];
    var nextNode = nodes[rightNode];
    if(lastNode[1].length || nextNode[1].length || Math.abs(nextNode[1] - lastNode[1]) <= 1){
        return pointOnLine(
            getNodeInLine(lastNode[1]),
            getNodeInLine(nextNode[1]),
            (time - lastNode[0]) / (nextNode[0] - lastNode[0])
        );
    }
    //4. 前后时间节点空间位置不相邻
    var nLength = [0], sgn = lastNode[1] < nextNode[1] ? 1 : -1;
    for(var i = 0; i < Math.abs(nextNode[1] - lastNode[1]); i++){
        nLength.push(nLength[i] + (sgn > 0 ? line[lastNode[1] + i][2] : line[lastNode[1] - i - 1][2]));
    }
    var expectedLength = (time - lastNode[0]) / (nextNode[0] - lastNode[0]) * nLength[nLength.length - 1];
    var ni = 0;
    while(nLength[ni + 1] < expectedLength){
        ni ++;
    }
    return pointOnLine(
        getNodeInLine(lastNode[1] + sgn * ni),
        getNodeInLine(lastNode[1] + sgn * (ni + 1)),
        (expectedLength - nLength[ni]) / (nLength[ni + 1] - nLength[ni])
    );
}

function getOpacityFor(train, time){
    var nodes = train.nodes;
    var trainStart = nodes[0][0];
    var trainEnd = nodes[nodes.length - 1][0];
    var timeFadeInSim = globalConfig.fadeTime * globalConfig.timeRatio / 1000;
    if(trainStart <= time && time <= trainEnd){
        return 1.0;
    }
    else if(trainStart > time){
        if(trainStart - time > timeFadeInSim){
            return 0;
        }else{
            return 1 - (trainStart - time) / timeFadeInSim;
        }
    }else if(time > trainEnd){
        if(time - trainEnd > timeFadeInSim){
            return 0;
        }else{
            return 1 - (time - trainEnd) / timeFadeInSim;
        }
    }else{
        return 0;
    }
}

$(document).ready(init);

/**
 * 主循环函数，负责：
 * - 维护每列车的实时位置
 * - 更新屏幕上的模拟时间
 * @param {number} time 模拟内时间
 * @returns {boolean} 模拟是否已经结束（`false`为已经结束）。
 */
function mainLoop(time){
    displayTime(time);
    if(time > endTime){
        return false;
    }
    for(var i in globalConfig.timetable){
        var posCenter = findPositionFor(
            globalConfig.timetable[i],
            globalConfig.lines[globalConfig.timetable[i].line],
            time
        );
        var me = $(".moving_element_" + i);
        me
            .css("left", posCenter[0] * pxRatio - me.width() * 0.5)
            .css("top", posCenter[1] * pxRatio - me.height() * 0.5)
            .css("opacity", getOpacityFor(globalConfig.timetable[i], time));
    }
    return true;
}

/**
 * 以`await`关键字方式模拟线程睡眠，需要当前浏览器支持。
 * @param {number} time 时间（毫秒），实际控制较为粗略。
 * @returns {Promise<void>} `Promise`对象，无实际意义。
 */
async function sleep(time){
    return new Promise((res, rej) => {
        setTimeout(res, time);
    });
}

var loopManager = {
    timeStart : 0,
    lastFpsUpdate : 0,
    lastFlush : 0,
    frames : 0,
    /**
     * 开始运行
     */
    runLoop : async function (){
        this.lastFrame = Date.now();
        this.lastFpsUpdate = Date.now();
        this.lastFlush = Date.now();
        this.timeStart = Date.now();
        while(mainLoop((Date.now() - this.timeStart) * globalConfig.timeRatio / 1000 + startTime)){
            frames ++;
            // 这样大约可以控制在60帧
            if(Date.now() - this.lastFlush < 10){
                await sleep(10 - Date.now() + this.lastFlush);
            }
            this.lastFlush = Date.now();
            if(Date.now() - this.lastFpsUpdate >= 1000){
                $(".fps").text(frames + "");
                frames = 0;
                this.lastFpsUpdate = Date.now();
            }
        }
    }
}

// 开始键
$(document).keyup((e, t) => {
    if(e.keyCode == globalConfig.startKey){
        loopManager.runLoop();
    }
});