/*
   Copyright (c) 2018 jones
 
    http://www.apache.org/licenses/LICENSE-2.0

   Open source project https://github.com/jones2000/HQChart
 
   jones_2000@163.com

   Color scheme
*/

/*
    Different styles of market configuration files
    !! The font size on the phone needs * resolution ratio
*/

/* There is already in umychart.js
function GetDevicePixelRatio()
{
    return window.devicePixelRatio || 1;
}
*/

//Black style
var BLACK_STYLE=
{
    BGColor:'#151D2F', //Background color
    TooltipBGColor: "rgb(255, 255, 255)", //background color
    TooltipAlpha: 0.92, //Transparency

    SelectRectBGColor: "rgba(1,130,212,0.06)", //Background color
    // SelectRectAlpha: 0.06; //Transparency

    //K line color
    UpBarColor: "#00C8BC", //Up
    DownBarColor: "#E5544B", //Down
    UnchagneBarColor: "rgb(228,228,228)", //Flat
    EmptyBarBGColor:'#151D2F', //hollow column background color

    Minute:
    {
        VolBarColor: null,
        PriceColor: "rgb(25,180,231)",
        AreaPriceColor:"rgba(63,158,255,.3)",
        AvPriceColor: "rgb(255,236,0)",
        PositionColor:'rgb(218,165,32)',
        VolTitleColor:"rgb(190,190,190)",
        Before:
        {
            BGColor:"rgba(105,105,105,0.5)",
            AvPriceColor:'rgb(248,248,255)' // moving average
        }
    },


    DefaultTextColor: "rgb(101,104,112)",
    DefaultTextFont: 11*GetDevicePixelRatio() +'px sans-serif',
    TitleFont: 10*GetDevicePixelRatio() +'px sans-serif', //Title font (dynamic information font of dynamic title K-line and indicator)

    UpTextColor: "#00C8BC",
    DownTextColor: "#E5544B",
    UnchagneTextColor: "rgb(101,104,112)",
    CloseLineColor:'rgb(178,34,34)',
    Title:
    {
        TradeIndexColor:'rgb(105,105,105)', //Trading indicator color
        ColorIndexColor:'rgb(112,128,144)', //Color of colorful K-line

        VolColor:"rgb(101,104,112)", //Title volume
        AmountColor:"rgb(101,104,112)", //Transaction amount
        DateTimeColor:"rgb(101,104,112)", //time, date
        SettingColor:"rgb(101,104,112)", //period, restoration
        NameColor:"rgb(101,104,112)", //Stock name
        TurnoverRateColor:'rgb(101,104,112)', //turnover rate
        PositionColor: "rgb(101,104,112)" //Position
    },

    FrameBorderPen: "rgba(236,236,236,0.13)", //Border
    FrameSplitPen: "rgba(236,236,236,0.13)", //Split line
    FrameSplitTextColor: "rgb(101,104,112)", //scale text color
    FrameSplitTextFont: 10*GetDevicePixelRatio() +"px sans-serif", //Coordinate scale text font
    FrameTitleBGColor: "#151D2F", //The background color of the title bar
    OverlayIndexTitleBGColor:'rgba(0,0,0,0.7)', //Overlay indicator background color
    Frame:
    {
        XBottomOffset:1*GetDevicePixelRatio(), //X-axis text offset downward
       
        PercentageText: //Percentage coordinate text color
        {
            PriceColor:'rgb(101,104,112)',
            PercentageColor:"rgb(101,104,112)",
            SplitColor:"rgb(101,104,112)",
            Font:10*GetDevicePixelRatio() +"px sans-serif"
        }
    },


    FrameLatestPrice: {
        TextColor:'rgb(255,255,255)', //The latest price text color
        UpBarColor:"#00C8BC", //Rise
        DownBarColor: "#00C8BC", //decline
        UnchagneBarColor: "rgb(190,190,190)", //Flat plate
        BGAlpha: 0.6
    },

    CorssCursorBGColor: "rgb(43,54,69)", //Cross cursor background
    CorssCursorTextColor: "rgb(255,255,255)",
    CorssCursorTextFont: 10*GetDevicePixelRatio() +"px sans-serif",
    CorssCursorHPenColor: "rgb(130,130,130)", //Cross cursor line color
    CorssCursorVPenColor: "rgb(130,130,130)", //Cross cursor line segment color

    CorssCursor:
    { 
        RightButton : 
        { 
            BGColor:'rgb(43,54,69)', 
            PenColor:'rgb(255,255,255)',
            Icon: { Text:'\ue6a3', Color:'rgb(255,255,255)', Family:"iconfont", Size:18 }
        } 
    },

    KLine:
    {
        MaxMin: {Font: 10*GetDevicePixelRatio() +'px sans-serif', Color:'rgb(255,250,240)', RightArrow:"→", LeftArrow:"←", HighYOffset:0, LowYOffset:0 }, // K line maximum and minimum display
        Info: //Information Mine
        {
            Investor:
                {
                    ApiUrl:'/API/NewsInteract', //Easy to interact
                    IconFont: {Family:'iconfont', Text:'\ue631', HScreenText:'\ue684', Color:'#1c65db'} //SVG text
                },
                Announcement: //Announcement
                {
                    ApiUrl:'/API/ReportList',
                    IconFont: {Family:'iconfont', Text:'\ue633', HScreenText:'\ue685', Color:'#f5a521' }, //SVG text
                    IconFont2: {Family:'iconfont', Text:'\ue634', HScreenText:'\ue686', Color:'#ed7520'} //SVG text //Quarterly report
                },
                Pforecast: //Performance forecast
                {
                    ApiUrl:'/API/StockHistoryDay',
                    IconFont: {Family:'iconfont', Text:'\ue62e', HScreenText:'\ue687', Color:'#986cad'} //SVG text
                },
                Research: //Research
                {
                    ApiUrl:'/API/InvestorRelationsList',
                    IconFont: {Family:'iconfont', Text:'\ue632', HScreenText:'\ue688', Color:'#19b1b7'} //SVG text
                },
                BlockTrading: //Block trade
                {
                    ApiUrl:'/API/StockHistoryDay',
                    IconFont: {Family:'iconfont', Text:'\ue630', HScreenText:'\ue689', Color:'#f39f7c'} //SVG text
                },
                TradeDetail: //Dragon and Tiger List
                {
                    ApiUrl:'/API/StockHistoryDay',
                    IconFont: {Family:'iconfont', Text:'\ue62f', HScreenText:'\ue68a' ,Color:'#b22626'} //SVG text
                }

        },
        NumIcon:
        {
            Color:'rgb(251,80,80)',Family:'iconfont',
            Text:[  '\ue649',
                    '\ue63b','\ue640','\ue63d','\ue63f','\ue645','\ue641','\ue647','\ue648','\ue646','\ue636',
                    '\ue635','\ue637','\ue638','\ue639','\ue63a','\ue63c','\ue63e','\ue642','\ue644','\ue643'
                ]
        },
        TradeIcon:  //交易指标 图标
        {
            Family:'iconfont', 
            Buy: { Color:'rgb(255,15,4)', Text:'\ue683', HScreenText:'\ue682'}, 
            Sell: { Color:'rgb(64,122,22)', Text:'\ue681',HScreenText:'\ue680'},
        }
    },

    Index: 
    {      
        LineColor:  //指标线段颜色
        [
            "rgb(255,189,09)",
            "rgb(22,198,255)",
            "rgb(174,35,161)",
            "rgb(236,105,65)",
            "rgb(68,114,196)",
            "rgb(229,0,79)",
            "rgb(0,128,255)",
            "rgb(252,96,154)",
            "rgb(42,230,215)",
            "rgb(24,71,178)",
        ],
        NotSupport: { Font: "14px sans-serif", TextColor: "rgb(52,52,52)" }
    },
      
    ColorArray:       //自定义指标默认颜色
    [
        "rgb(255,174,0)",
        "rgb(25,199,255)",
        "rgb(175,95,162)",
        "rgb(236,105,65)",
        "rgb(68,114,196)",
        "rgb(229,0,79)",
        "rgb(0,128,255)",
        "rgb(252,96,154)",
        "rgb(42,230,215)",
        "rgb(24,71,178)",
    ],

    DrawPicture:  //画图工具
    {
        LineColor: "rgb(30,144,255)",
        PointColor: "rgb(105,105,105)",
    },

    TooltipPaint : 
    {
        BGColor:'rgba(20,20,20,0.8)',    //背景色
        BorderColor:'rgb(210,210,210)',     //边框颜色
        TitleColor:'rgb(210,210,210)',       //标题颜色
        TitleFont:10*GetDevicePixelRatio() +'px sans-serif',   //字体
        DateTimeColor:'rgb(210,210,210)',
        VolColor:"rgb(210,210,210)",       //标题成交量
        AmountColor:"rgb(210,210,210)",    //成交金额
    },

    //走势图 信息地雷
    MinuteInfo:
    {
        TextColor: 'rgb(84,143,255)',
        Font: 10*GetDevicePixelRatio() +'px sans-serif',
        PointColor:'rgb(38,113,254)',
        LineColor:'rgb(120,167,255)',
        TextBGColor:'rgba(255,255,255,1)'
    },

    //筹码分布图
    StockChip:
    {
        InfoColor:'rgb(255,255,255)', //文字颜色
        DayInfoColor:'#151D2F' //周期颜色内文字颜色
    },

    //深度图
    DepthChart:
    {
        BidColor: { Line:"rgb(82,176,123)", Area:"rgba(82,176,123,0.5)"},  //卖
        AskColor: { Line:"rgb(207,76,89)", Area:"rgba(207,76,89, 0.5)"},   //买
        LineWidth:4
    },

    DepthCorss:
    {
        BidColor: { Line:"rgb(82,176,123)" },  //卖
        AskColor: { Line:"rgb(207,76,89)" },   //买
        LineWidth:2,    //线段宽度
        LineDash:[3,3],
        Tooltip:
        { 
            BGColor:'rgba(54,54,54, 0.8)', TextColor:"rgb(203,215,224)",
            Border:{ Top:5, Left:20, Bottom:5, Center: 5},
            Font:10*GetDevicePixelRatio() +"px sans-serif",
            LineHeight:16   //单行高度
        }
    },

    //区间选择
    RectSelect:
    {
        LineColor:"rgb(115,83,64)",          //竖线  
        LineWidth:1*GetDevicePixelRatio(),
        LineDotted:[3,3], 
        AreaColor:"rgba(26,13,7,0.5)",     //面积
    }
    
};

var STYLE_TYPE_ID=
{
    BLACK_ID:1, //黑色风格
}

function HQChartStyle()
{

}

HQChartStyle.GetStyleConfig=function(styleid)    //获取一个风格的配置变量
{
  switch (styleid)
  {
      case STYLE_TYPE_ID.BLACK_ID:
          return BLACK_STYLE;
      default:
          return null;
  }
}



