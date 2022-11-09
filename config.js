const COLOR_LOCAL = "#2e3192";
const COLOR_EXPRESS = "#22b573";
const COLOR_DIRECT = "#fbb03b";
var globalConfig = {
    timeRatio : 240,
    workWidth : 1920,
    workHeight : 1080,
    background : "Jinshan_Railway.svg",
    startKey : 32,
    lines : [
        [ // 上海南 -> 金山卫
            [160,  460, 12],//金山卫    0
            [360,  460, 7],//金山园区  1
            [560,  460, 6],//亭林      2
            [760,  460, 8],//叶榭      3
            [960,  460, 7],//车墩      4
            [1160, 460, 5],//新桥      5
            [1360, 460, 4],//春申      6
            [1560, 460, 6],//莘庄      7
            [1760, 460] //上海南    8
        ],
        [ // 金山卫 -> 上海南
            [160,  620, 12],//金山卫    0
            [360,  620, 7],//金山园区  1
            [560,  620, 6],//亭林      2
            [760,  620, 8],//叶榭      3
            [960,  620, 7],//车墩      4
            [1160, 620, 5],//新桥      5
            [1360, 620, 4],//春申      6
            [1560, 620, 6],//莘庄      7
            [1760, 620] //上海南    8
        ]
    ],
    //2A车次：S1001 S1604 S1201 S1644
    timetable : [
        //上海南 -> 金山卫
        {
            name : "S1001",
            textBackgronud : COLOR_DIRECT,
            file : "CRH2A.png",
            line : 0,
            nodes : [
                ["5:20", 8],
                ["6:01", 0]
            ]
        },
        {
            name : "S1601",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 0,
            nodes : [
                ["5:52", 8],
                ["6:10", 6],
                ["6:11", 6],
                ["6:18", 5],
                ["6:19", 5],
                ["6:26", 4],
                ["6:27", 4],
                ["6:34", 3],
                ["6:35", 3],
                ["6:41", 2],
                ["6:42", 2],
                ["6:48", 1],
                ["6:49", 1],
                ["6:59", 0]
            ]
        },
        {
            name : "S1205",
            textBackgronud : COLOR_EXPRESS,
            file : "CRH6F.png",
            line : 0,
            nodes : [
                ["6:18", 8],
                ["6:43", 4],
                ["6:44", 4],
                ["6:53", 2],
                ["6:54", 2],
                ["7:07", 0]
            ]
        },
        {
            name : "S1003",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 0,
            nodes : [
                ["6:29", 8],
                ["7:12", 0]
            ]
        },
        {
            name : "S1005",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1001",
            depature : "7:02"
        },
        {
            name : "S1007",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1001",
            depature : "7:44"
        },
        {
            name : "S1603",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1601",
            depature : "7:52"
        },
        {
            name : "S1009",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1003",
            depature : "8:21"
        },
        {
            name : "S1011",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1001",
            depature : "9:03"
        },
        {
            name : "S1013",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1001",
            depature : "9:18"
        },
        {
            name : "S1605",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1601",
            depature : "9:26s"
        },
        {
            name : "S1015",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 0,
            nodes : [
                ["9:56", 8],
                ["10:38", 0]
            ]
        },
        {
            name : "S1607",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1601",
            depature : "10:29"
        },
        {
            name : "S1609",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1601",
            depature : "10:37"
        },
        {
            name : "S1017",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1001",
            depature : "11:08"
        },
        {
            name : "S1611",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1601",
            depature : "11:14"
        },
        {
            name : "S1613",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1601",
            depature : "12:02"
        },
        {
            name : "S1021",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1003",
            depature : "12:47"
        },
        {
            name : "S1615",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1601",
            depature : "13:08"
        },
        {
            name : "S1617",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1601",
            depature : "13:47"
        },
        {
            name : "S1023",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1001",
            depature : "14:39"
        },
        {
            name : "S1619",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1601",
            depature : "14:46"
        },
        {
            name : "S1621",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1601",
            depature : "15:19"
        },
        {
            name : "S1025",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1001",
            depature : "16:11"
        },
        {
            name : "S1027",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1001",
            depature : "16:23"
        },
        {
            name : "S1623",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1601",
            depature : "16:43"
        },
        {
            name : "S1625",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1601",
            depature : "17:09"
        },
        {
            name : "S1627",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1601",
            depature : "17:34"
        },
        {
            name : "S1029",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1003",
            depature : "18:04"
        },
        {
            name : "S1201",
            textBackgronud : COLOR_EXPRESS,
            file : "CRH2A.png",
            line : 0,
            nodes : [
                ["18:34", 8],
                ["18:56", 5],
                ["18:58", 5],
                ["19:11", 2],
                ["19:13", 2],
                ["19:26", 0]
            ]
        },
        {
            name : "S1203",
            textBackgronud : COLOR_EXPRESS,
            file : "CRH6F.png",
            line : 0,
            nodes : [
                ["18:43", 8],
                ["19:05", 5],
                ["19:06", 5],
                ["19:19", 2],
                ["19:20", 2],                
                ["19:33", 0]
            ]
        },
        {
            name : "S1631",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1601",
            depature : "18:55"
        },
        {
            name : "S1033",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1003",
            depature : "19:46"
        },
        {
            name : "S1633",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1601",
            depature : "20:08"
        },
        {
            name : "S1635",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1601",
            depature : "20:54"
        },
        {
            name : "S1035",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 0,
            offsetFrom : "S1001",
            depature : "21:52"
        },
        // 金山卫 -> 上海南
        {
            name : "S1602",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 1,
            nodes : [
                ["5:46", 0],
                ["5:56", 1],
                ["5:57", 1],
                ["6:03", 2],
                ["6:04", 2],
                ["6:10", 3],
                ["6:11", 3],
                ["6:18", 4],
                ["6:19", 4],
                ["6:26", 5],
                ["6:27", 5],
                ["6:34", 6],
                ["6:35", 6],
                ["6:50", 8]
            ]
        },
        {
            name : "S1604",
            textBackgronud : COLOR_LOCAL,
            file : "CRH2A.png",
            line : 1,
            offsetFrom : "S1602",
            depature : "6:13"
        },
        {
            name : "S1002",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 1,
            nodes : [
                ["6:51", 0],
                ["7:29", 8],
            ]
        },
        {
            name : "S1004",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 1,
            nodes : [
                ["6:58", 0],
                ["7:37", 8],
            ]
        },
        // S1006和S1642的“碰撞”：
        // 本文件描述金山铁路22年10月11日调图
        // 程序采用匀速估算列车的运动，但是实际上，22年3月以后由于沪苏湖施工春申至莘庄之间存在减速
        // 其余车次不会出现原则性问题，但是S1006在这一问题以及里程的精确度（±1km）不足两个因素的叠加下
        // 出现了S1006与S1642的渲染在车墩、新桥间“碰撞”的问题
        // 故，咨询有关人士，得知直达车在金山卫与车墩之间得运行时间约为17分钟
        // 在S1006车次上插入一个虚拟节点
        // 以避免与S1642产生渲染上的碰撞
        // 其余车次没有渲染问题，更改效果不明显，维持原状
        {
            name : "S1006",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 1,
            nodes : [
                ["7:13", 0],
                ["7:30", 4],
                ["7:51", 8]
            ]
        },
        {
            name : "S1642",
            textBackgronud : COLOR_LOCAL,
            file : "CRH2A.png",
            line : 1,
            nodes : [
                ["7:35", 4],
                ["7:42", 5],
                ["7:44", 5],
                ["7:51", 6],
                ["7:52", 6],
                ["8:07", 8],
            ]
        },
        {
            name : "S1606",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 1,
            nodes : [
                ["7:26", 0],
                ["7:36", 1],
                ["7:37", 1],
                ["7:43", 2],
                ["7:44", 2],
                ["7:50", 3],
                ["7:51", 3],
                ["7:58", 4],
                ["7:59", 4],
                ["8:06", 5],
                ["8:07", 5],
                ["8:28", 8]
            ]
        },
        {
            name : "S1640",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 1,
            nodes : [
                ["7:41", 0],
                ["7:51", 1],
                ["7:52", 1],
                ["7:58", 2],
                ["7:59", 2],
                ["8:05", 3],
                ["8:07", 3],
                ["8:14", 4],
                ["8:15", 4],
                ["8:22", 5],
                ["8:24", 5],
                ["8:31", 6],
                ["8:32", 6],
                ["8:48", 8]
            ]
        },
        {
            name : "S1608",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1640",
            depature : "7:41"
        },
        {
            name : "S1008",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 1,
            nodes : [
                ["8:47", 0],
                ["9:25", 8]
            ]
        },
        {
            name : "S1610",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 1,
            nodes : [
                ["9:11", 0],
                ["9:21", 1],
                ["9:22", 1],
                ["9:28", 2],
                ["9:29", 2],
                ["9:35", 3],
                ["9:36", 3],
                ["9:43", 4],
                ["9:44", 4],
                ["9:51", 5],
                ["9:52", 5],
                ["10:11", 8],
            ]
        },
        {
            name : "S1010",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1008",
            depature : "9:38"
        },
        {
            name : "S1612",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1610",
            depature : "9:56"
        },
        {
            name : "S1012",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1008",
            depature : "10:23"
        },
        {
            name : "S1614",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1610",
            depature : "10:50"
        },
        {
            name : "S1616",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1610",
            depature : "11:18"
        },
        {
            name : "S1014",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1008",
            depature : "11:50"
        },
        {
            name : "S1016",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1008",
            depature : "12:16"
        },
        {
            name : "S1618",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1610",
            depature : "12:34"
        },
        {
            name : "S1018",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1008",
            depature : "13:21"
        },
        {
            name : "S1202",
            textBackgronud : COLOR_EXPRESS,
            file : "CRH6F.png",
            line : 1,
            nodes : [
                ["13:45", 0],
                ["13:58", 2],
                ["13:59", 2],
                ["14:12", 5],
                ["14:13", 5],
                ["14:32", 8]
            ]
        },
        {
            name : "S1620",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1610",
            depature : "14:27"
        },
        {
            name : "S1024",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1008",
            depature : "15:14"
        },
        {
            name : "S1026",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1008",
            depature : "15:32"
        },
        {
            name : "S1622",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1610",
            depature : "15:42"
        },
        {
            name : "S1624",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1610",
            depature : "16:08"
        },
        {
            name : "S1028",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1008",
            depature : "16:49"
        },
        {
            name : "S1030",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1008",
            depature : "17:18"
        },
        {
            name : "S1626",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1610",
            depature : "17:31"
        },
        {
            name : "S1032",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1008",
            depature : "18:03"
        },
        {
            name : "S1628",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1610",
            depature : "18:30"
        },
        {
            name : "S1630",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1610",
            depature : "18:53"
        },
        {
            name : "S1632",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1610",
            depature : "19:20"
        },
        {
            name : "S1034",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 1,
            nodes : [
                ["19:48", 0],
                ["20:28", 8]
            ]
        },
        {
            name : "S1644",
            textBackgronud : COLOR_LOCAL,
            file : "CRH2A.png",
            line : 1,
            offsetFrom : "S1610",
            depature : "19:53"
        },
        {
            name : "S1634",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1610",
            depature : "20:14"
        },
        {
            name : "S1636",
            textBackgronud : COLOR_LOCAL,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1610",
            depature : "20:58"
        },
        {
            name : "S1036",
            textBackgronud : COLOR_DIRECT,
            file : "CRH6F.png",
            line : 1,
            offsetFrom : "S1008",
            depature : "21:53"
        },
    ],
    picSize : 50,
    defaultTextColor : "#fff",
    defaultTextBackground : "#f00",
    fadeTime : 1000,
    timePosition : [960, 900],
    hideFPS : true
};