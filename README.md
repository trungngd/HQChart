![logo](./logo2.png)

[![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)
[![github star](https://img.shields.io/github/stars/jones2000/HQChart.svg)]('https://github.com/jones2000/HQChart/stargazers')
[![github fork](https://img.shields.io/github/forks/jones2000/HQChart.svg)]('https://github.com/jones2000/HQChart/members')
[![gitee star](https://gitee.com/jones2000/HQChart/badge/star.svg?theme=dark)]('https://gitee.com/jones2000/HQChart/stargazers')
[![gitee fork](https://gitee.com/jones2000/HQChart/badge/fork.svg?theme=dark)]('https://gitee.com/jones2000/HQChart/members')
[![npm package](https://img.shields.io/npm/v/hqchart.svg?style=flat-square)](https://www.npmjs.org/package/hqchart)
[![npm dw](https://img.shields.io/npm/dw/hqchart)](https://img.shields.io/npm/dw/hqchart)
HQChart is the first project based on the traditional domestic PC stock client software (C++) ported to the js/py platform, including **K-line graph graphics library** and **Mai gram (analyst grammar) indicator executor* *. <br>
**Support platform**: js, vue2.0, vue3.0, uniapp, small program <br>
**Supported varieties**: Supports stocks, futures, digital currencies, foreign exchange and other varieties related to K-line. <br>
**Mai Grammar Index Calculation Engine** (Analyst Grammar) indicator executor supports js, nodejs, py, c#, c++. <br>


Source address: [https://github.com/jones2000/HQChart](https://github.com/jones2000/HQChart)<br>
Mirror address: [https://gitee.com/jones2000/HQChart](https://gitee.com/jones2000/HQChart)<br>

uniapp version:
New version of the plug-in: [https://ext.dcloud.net.cn/plugin?id=4591](https://ext.dcloud.net.cn/plugin?id=4591)<br>
Manually import the plug-in for the old version: [https://ext.dcloud.net.cn/plugin?id=790](https://ext.dcloud.net.cn/plugin?id=790)<br>

[HQChart User Agreement](/User Agreement.txt) <br>

If you think our market data module is helpful to you, please give us a star. (●ˇ∀ˇ●) <br>

The py version of the wheat grammar indicator calculation engine has been separately migrated to [https://github.com/jones2000/hqchartPy2](https://github.com/jones2000/hqchartPy2),
It can be installed by pip install hqchart, which supports windows, and linux. This version is developed in c++, and py is docked through cpython, which can efficiently complete indicator execution. It can be used in backtesting, stock selection and other batch indicator calculations. The c++ part is not open source, only the compiled dynamic library is opened, and it can be called directly on py<br>

**The list of tutorials and demo renderings are below, and you can see the drop-down page!!!!!!!!!!!!**

# Directory Structure
--webhqchart market quotation front-end js code module <br>
--wechathqchart Wechat applet market quotation front-end js code module <br>
*Notice! The current code uses the features of ES6, so some old browsers will not be able to display it, you need to use Babel to convert to es5

--webhqchart.demo page quotation test case <br>
   * |--jscommon market quotation front-end js code is a copy of webhqchart <br>
   * |--demo test use <br>
   
--vuehqchart
   * |--src market control
        * |--umychart.resource Image resources and css styles used in quotation
        * |--umychart.vue market graph and market data module
        * |--umychart.vue.components Quote VUE control module
   * |--pages test and demo pages

--Mini Program Quotes Module Use Cases Mini Program Test Cases<br>

--umychart_python analyzer grammar (Mike grammar) python version <br>
--umychart_indexapi nodejs indicator background calculation demo (including docker package file) <br>

# npm install
npm install jquery <br>
npm install hqchart <br>
[https://www.npmjs.com/package/hqchart](https://www.npmjs.com/package/hqchart) <br>
VUE example: [demo-vue.md](/tutorial/demo-vue.md) <br>
React example: [demo-react.md](/tutorial/demo-react.md) <br>

# Local debugging
The built-in test data does not support cross-domain. If you want to debug the code in local Chrome, please refer to the tutorial [Solving Chrome Local Debug Cross-domain](https://jones2000.blog.csdn.net/article/details/120008624). VUE project local debugging Please use the 127.0.0.1:8080 site for debugging

# Statement
  This project only provides market graph library and grammar script executor.<br>
  All the market data on the page comes from the Internet or test fake data. The correctness of the data cannot be guaranteed. It is only used for development and debugging. Any problem with the market data has nothing to do with this project. Please go to the exchange to purchase the genuine market data by yourself.


# HQChart 3.0
* Separate web version and WeChat applet version <br>
  ![Chart Chart](/Mini Program Quotes Module Use Case/image/hqchart_minute.PNG)
  ![Chart Chart 2](/Mini Program Quotes Module Use Case/image/hqchart_minute2.PNG)
  ![Chart Chart 3](/Mini Program Quotes Module Use Case/image/hqchart_minute_hscreen.PNG)
  ![Kline Chart](/Mini Program Quotes Module Use Case/image/hqchart_kline.PNG)
  ![Kline Chart 2](/Mini Program Quotes Module Use Case/image/hqchart_kline_lock.PNG)
  ![Kline Chart 3](/Mini Program Quotes Module Use Case/image/hqchart_kline_hscreen.PNG)
  ![Kline Chart 4](/Mini Program Quotes Module Use Case/image/hqchart_kline_hscreen2.PNG)
  ![Multi-day chart 1](/Mini Program Quotes Module Use Case/image/hqchart_minute_5day.PNG)
  ![Multi-day chart 2](/Mini Program Quotes Module Use Case/image/hqchart_minute_5day2.PNG)
  ![Multi-day chart 3](/Mini Program Quotes Module Use Case/image/hqchart_minute_5day3.PNG)
  # 1. K-line chart
* Support pre-restoration and post-restoration <br>
* Support daily line, monthly line, weekly line, annual line. Minute line<br>
* The main image supports stock overlay <br>
* K line shape supports hollow K line, solid K line, U.S. line, closing price line
* Support commonly used indicators (currently more than 80 system indicators are entered), support custom Tongdaxin grammar script indicators<br>
 Moving average, BOLL, MACD, KDJ, VOL, RSI, BRAR, WR, BIAS, OBV, DMI, CR, PSY, CCI,
    DMA, TRIX, VR, EMV, ROC, MIM, FSL, CYR, MASS, WAD, CHO..... <br>
* Support drawing tools, support save to local or save in memory (small program does not support)<br>
     Line segment, ray, rectangle, arc line, horizontal line, trend line, parallel line, parallel channel, price channel line, text, Gann angle line, speed resistance line, golden section, percentage line, wave segment line, triangle, symmetrical angle, Fiji Bonacci periodic line, parallelogram, circle, iconfont picture<br>
* Support interval statistics, interval pattern matching (not supported by WeChat applet version) <br>
* Drag the mouse left and right to move the data, move the cross cursor on the keyboard, and zoom on the keyboard <br>
* Support wheat grammar [Built-in system function description](https://opensourcecdn.zealink.com/cache/webcache/hqfunctionhelp/index.html)
* Support Tongdaxin grammar index
* Support multicolored K-line (currently more than 30 multicolored K-lines are entered into the system), and multicolored K-line that supports custom Tongdaxin grammar scripts
* Support expert system indicators
* Support individual stock bargaining chip chart <br>
![Kline Chart](/Mini Program Quotes Module Use Case/image/hqchart_kline2.png)
* Support single index single stock front-end backtest calculation (webhqchart\umychart.regressiontest.js) (2019-5-13 add function)<br>
     Calculate the following data: <br>
          Trade: {Count number of transactions Days: number of transaction days Success: number of successful transactions Fail: number of failed transactions} <br>
          Day: {Count: total running Max: longest running Min: shortest running Average: average running} <br>
          Profit: total return StockProfit: individual stock return Excess: excess return MaxDropdown: maximum drawdown Beta: β (Beta) coefficient <br>
          NetValue: [{Date: date, Net: net value, Close: stock closing price, IndexClose: closing price of the market},] <br>
* Support barrage
* Support multi-indicator overlay (new feature added on 2019-7-12) <br>
![Kline Chart](/Mini Program Quotes Module Use Case/image/hqchart_kline_lock2.png)
* Support screenshots (new feature added on 2019-7-9)
* Support K-line daily data or minute data automatic update (2019-7-23)
* Support pen-by-pen candlestick chart (2019-9-9) <br>
![Kline Chart](/Mini Program Quotes Module Use Case/image/hqchart_kline3.png)
* Support K-line area chart
![Kline Chart](/Mini Program Quotes Module Use Case/image/hqchart_kline_area.png)
* Support depth map
![Depth Map](/Mini Program Quotes Module Use Case/image/depth_demo.png)
# 2. Trend chart
* Support indicators <br>
* Support stock overlay<br>
* Support Shanghai, Shenzhen and Hong Kong stocks, domestic futures, etc.<br>
* Minute data display <br>
* Support multi-day and minute data display<br>
* Support A-share call auction display/hide (2019-7-12 new feature) <br>
![Chart Chart 2](/Mini Program Quotes Module Use Case/image/hqchart_minute3.png)
* Support index leading indicators (new feature added on 2019-7-15) <br>
![Leading Indicators](/Mini Program Quotes Module Use Case/image/hqchart_kline_lock3.png)
* Support information identification <br>
![Information Identification](/Mini Program Quotes Module Use Case/image/hqchart_minute_info.png)
* Support daily limit coordinates <br>


# 3. Web demo <br>
* [K line diagram](https://opensource2.zealink.com/hqweb/demo/phone7.html) <br>
* [Chart](https://opensource2.zealink.com/hqweb/demo/phone8.html) <br>
* [Trend Chart Mobile Page](https://opensource2.zealink.com/hqweb/demo/phone2.html) <br>
* [Kline Chart Mobile Page](https://opensource2.zealink.com/hqweb/demo/phone.html) <br>
* [Horizontal Trend Chart Mobile Page](https://opensource2.zealink.com/hqweb/demo/phone10.html) <br>
* [Horizontal K-line Chart Mobile Page](https://opensource2.zealink.com/hqweb/demo/phone9.html) <br>
* [Multi-day chart](https://opensource2.zealink.com/hqweb/demo/phone15.html) <br>
* [Individual stock bargaining chip chart](https://opensource2.zealink.com/hqweb/demo/phone18.html) <br>
* [Indicator backtest (mobile version)](https://opensource2.zealink.com/hqweb/operatebsh5/index.html?symbol=000001.sz) <br>
* [Mobile K-line training](https://opensource2.zealink.com/hqweb/demo/demo_ktrain.html) <br>
* [Mobile phone K-line training horizontal screen](https://opensource2.zealink.com/hqweb/demo/demo_ktrain2.html) <br>
* [Barrage function](https://opensource2.zealink.com/hqweb/demo/phone21.html) <br>
* [Multi-indicator overlay](https://opensource2.zealink.com/hqweb/demo/phone22.html) <br>
* [Section Data (Financial Data) Calculator](https://opensource2.zealink.com/hqweb/demo/sectiondatatest.html) <br>
* [Trend Chart-Market Change](https://opensource2.zealink.com/hqweb/demo/phone23.html) <br>
* [Divided K-line Chart](https://opensource2.zealink.com/hqweb/demo/phone24.html) <br>
* For mini program demo, please search for ‘Introduction to Zhilin Information Software and Data Services’ or scan on Wechat! [QR code](/Mini Program Quotes Module Use Case/image/wechatrcode.jpg)


# 4.使用教程## H5 Tutorial
1. [HQChart tutorial 1-how to quickly create a candlestick chart page](https://blog.csdn.net/jones2000/article/details/90272733) <br>
2. [HQChart Tutorial 2-How to display custom indicators on the K-line chart page](https://blog.csdn.net/jones2000/article/details/90273684) <br>
3. [HQChart Tutorial 3-How to lock the indicator and display it on the K-line chart page](https://blog.csdn.net/jones2000/article/details/90285723) <br>
4. [HQChart tutorial 4-How to customize the color style of the candlestick chart](https://blog.csdn.net/jones2000/article/details/90286933) <br>
5. [HQChart tutorial 5-K-line chart control operation function description](https://blog.csdn.net/jones2000/article/details/90301000) <br>
6. [HQChart Tutorial 6-How to Obtain the Indicator Data on the K-Line Chart for Backtesting](https://blog.csdn.net/jones2000/article/details/90314625) <br>
7. [HQChart Tutorial 7-How to quickly create a time-sharing chart page](https://blog.csdn.net/jones2000/article/details/90319619) <br>
8. [HQChart Tutorial 9-How to quickly create a K-line training page](https://blog.csdn.net/jones2000/article/details/90478687) <br>
9. [HQChart Usage Tutorial 10-Several Special Attributes of Mobile Phone Page Settings](https://blog.csdn.net/jones2000/article/details/90727468) <br>
10. [HQChart tutorial 11-How to replace K-line data API with your own API data](https://blog.csdn.net/jones2000/article/details/90747715) <br>
11. [HQChart Tutorial 8-How to quickly create a horizontal time-sharing chart page](https://blog.csdn.net/jones2000/article/details/90453776) <br>
12. [HQChart Tutorial 14-Analyst Grammar Executor](https://blog.csdn.net/jones2000/article/details/93731637) <br>
13. [HQChart use tutorial 13-5 minutes to complete a small program K-line chart](https://blog.csdn.net/jones2000/article/details/91471252) <br>
14. [HQChart Tutorial 12-How to add a barrage on the candlestick chart](https://blog.csdn.net/jones2000/article/details/91125408) <br>
15. [HQChart Tutorial 15-Analyst Grammar Executor python version](https://blog.csdn.net/jones2000/article/details/94738592) <br>
16. [Visualization of Mai Language Indicators in HQChart Usage Tutorial 16-py](https://blog.csdn.net/jones2000/article/details/94920596) <br>
17. [HQChart Tutorial 17-Multi-Technical Index Independent Coordinate Overlay](https://blog.csdn.net/jones2000/article/details/95618901) <br>
18. [HQChart usage tutorial 18-K line screenshot](https://blog.csdn.net/jones2000/article/details/95738306) <br>
19. [HQChart使用教程19-基于HQChart的后台单股票指标计算服务](https://blog.csdn.net/jones2000/article/details/96479448) <br>
20. [HQChart Tutorial 20-Single Stock Cross Section Data (Financial Data) Calculator](https://blog.csdn.net/jones2000/article/details/97135592) <br>
21. [HQChart Tutorial 21-Cross Cursor Setting Instructions](https://blog.csdn.net/jones2000/article/details/97682466) <br>
22. [HQChart tutorial 22-How to create a mobile chip chart](https://blog.csdn.net/jones2000/article/details/97928892) <br>
23. [HQChart Tutorial 23-Y-axis scale display settings](https://blog.csdn.net/jones2000/article/details/98320020) <br>
24. [HQChart Tutorial 24-Multilingual Settings](https://blog.csdn.net/jones2000/article/details/98734091) <br>
25. [HQChart Tutorial 25-Overlay Multiple Variety Settings](https://blog.csdn.net/jones2000/article/details/98878463) <br>
26. [HQChart Usage Tutorial 26-K-line chart and trend chart data automatic update setting](https://blog.csdn.net/jones2000/article/details/99483328) <br>
27. [HQChart Tutorial 27-Dynamic Setting of K-line Chart Indicator Template](https://blog.csdn.net/jones2000/article/details/100079989) <br>
28. [HQChart Tutorial 28-How to Create System Indicators](https://blog.csdn.net/jones2000/article/details/100103486) <br>
29. [HQChart Tutorial 31- Trend Chart Change Data Setting](https://blog.csdn.net/jones2000/article/details/100191957) <br>
30. [HQChart tutorial 32-How to display custom SVG vector icons on candlestick charts](https://blog.csdn.net/jones2000/article/details/100613634) <br>
33. [HQChart Tutorial 39-How to Draw Text Dividing Lines in Indicators](https://blog.csdn.net/jones2000/article/details/101487482) <br>
34. [HQChart Tutorial 40-How to Customize the K Line of Minute Cycle or Daily Cycle](https://blog.csdn.net/jones2000/article/details/101722958) <br>
35. [HQChart tutorial 41-minute K-line setting drag and drop to automatically download historical data](https://blog.csdn.net/jones2000/article/details/102471720) <br>
36. [HQChart tutorial 42-K line chart how to dock digital currency](https://blog.csdn.net/jones2000/article/details/102493905) <br>
37. [HQChart Use Tutorial 43-Drag and drop to automatically download historical data on daily K line](https://blog.csdn.net/jones2000/article/details/102511317) <br>
38. [HQChart tutorial 45-how to dynamically modify indicator parameters](https://blog.csdn.net/jones2000/article/details/102594672) <br>
39. [HQChart Usage Tutorial 46-Minute Period Data Calculation External Interface](https://blog.csdn.net/jones2000/article/details/102628045) <br>
40. [HQChart Tutorial 47-How to customize the right-click menu](https://blog.csdn.net/jones2000/article/details/102720671) <br>
41. [HQChart tutorial 48-How to customize the X-axis scale](https://blog.csdn.net/jones2000/article/details/102741428) <br>
42. [HQChart Tutorial 49-Indicator Configuration Item Description](https://blog.csdn.net/jones2000/article/details/102928907) <br>
43. [HQChart tutorial 50-Y-axis custom scale setting instructions](https://blog.csdn.net/jones2000/article/details/103174483) <br>
44. [HQChart Tutorial 51-Indicator Switch Button Event Description-h5 Version](https://blog.csdn.net/jones2000/article/details/103187576) <br>
45. [HQChart Tutorial 52-Customize K-line Chart Tooltip on Mobile Phone](https://blog.csdn.net/jones2000/article/details/103820718) <br>
46. ​​[HQChart tutorial 53-log log output control](https://blog.csdn.net/jones2000/article/details/104122774) <br>
47. [HQChart tutorial 54-K line zoom control button interface description](https://blog.csdn.net/jones2000/article/details/104346016) <br>
48. [HQChart Tutorial 55-Custom PC K-line Chart Tooltip](https://blog.csdn.net/jones2000/article/details/104443471) <br>
49. [HQChart Usage Tutorial 56-Description of the List of Corresponding Suffixes of Built-in Varieties](https://blog.csdn.net/jones2000/article/details/104457569) <br>
50. [HQChart tutorial 57-How to adjust the zoom size of the candlestick column](https://blog.csdn.net/jones2000/article/details/104817724)<br>
51. [HQChart Tutorial 58-How to draw an area chart (such as a depth chart) on the right side of the K line](https://blog.csdn.net/jones2000/article/details/105026997)<br>
52. [HQChart Tutorial 59-Instructions for STKINDI Cross-Cycle and Cross-Stock Function](https://blog.csdn.net/jones2000/article/details/105401909)<br>
53. [HQChart Tutorial 60-New K-Line Training Tutorial](https://blog.csdn.net/jones2000/article/details/105760924)<br>
54. [HQChart Usage Tutorial 61-Drawing Tool Interface Usage Tutorial](https://blog.csdn.net/jones2000/article/details/105835428)<br>
55. [HQChart Usage Tutorial 62-Variety Decimal Place Setting](https://blog.csdn.net/jones2000/article/details/106592730)<br>
56. [HQChart Tutorial 64-Front-end custom cycle algorithm interface](https://blog.csdn.net/jones2000/article/details/107633707)<br>
57. [HQChart Tutorial 65-Set indicator output dynamic variable name](https://blog.csdn.net/jones2000/article/details/108675254)<br>
58. [HQChart Tutorial 66-Custom Data Download Text Prompt Effect](https://blog.csdn.net/jones2000/article/details/109007027)<br>
59. [HQChart Tutorial 67-Mouse click on K-line pillar to monitor events](https://blog.csdn.net/jones2000/article/details/109119390)<br>
60. [HQChart Tutorial 68-Configure DRAWTEXT, DRAWICON, DRAWNUMBER font size](https://blog.csdn.net/jones2000/article/details/109244069)<br>
61. [HQChart Tutorial 69-Get the K-line data of the specified stock](https://blog.csdn.net/jones2000/article/details/111736960)<br>
62. [HQChart Tutorial 70-Tongdaxin Grammar Detection/Index Translation](https://blog.csdn.net/jones2000/article/details/112998609)<br>
63. [HQChart tutorial 71-How to customize the Y-axis tick mark](https://blog.csdn.net/jones2000/article/details/113666565)<br>
64. [HQChart Tutorial 72-Drawing Tool Wave Ruler Scale Configuration](https://blog.csdn.net/jones2000/article/details/113923817)<br>
65. [HQChart Tutorial 73-Create HQChart Graphics with Vue3.0](https://blog.csdn.net/jones2000/article/details/114954091)<br>
66. [HQChart Tutorial 74-Use to quickly create a digital currency depth map](https://blog.csdn.net/jones2000/article/details/115322752)<br>
67. [HQChart tutorial 75-K line chart mouse click event interface](https://blog.csdn.net/jones2000/article/details/115707759)<br>
68. [HQChart tutorial 76-K-line chart gesture event interface](https://blog.csdn.net/jones2000/article/details/115862159)<br>
69. [HQChart tutorial 77-Y axis scale text creation event callback](https://blog.csdn.net/jones2000/article/details/116376898)<br>
70. [HQChart Tutorial 78-Time-sharing Chart Collective Bidding](https://blog.csdn.net/jones2000/article/details/116523681)<br>
71. [HQChart Tutorial 79-Exception Handling Interface](https://blog.csdn.net/jones2000/article/details/117524401)<br>
72. [HQChart Tutorial 80-Custom Indicator Title Information](https://blog.csdn.net/jones2000/article/details/117803420)<br>
73. [HQChart Tutorial 81-Customize Indicator Window Height](https://jones2000.blog.csdn.net/article/details/118652171)<br>
74. [HQChart tutorial 82-Dynamic modification of overlay indicator parameters](https://jones2000.blog.csdn.net/article/details/118681399)<br>
75. [HQChart tutorial 83-K-line chart highest and lowest price display configuration](https://jones2000.blog.csdn.net/article/details/118856130)<br>
76. [HQChart tutorial 84-button event on the right side of the cross cursor](https://jones2000.blog.csdn.net/article/details/120562697)<br>
77. [HQChart Tutorial 85-Stock Restoration Calculation](https://jones2000.blog.csdn.net/article/details/120700837)<br>
## Mini Program Tutorial
1. [HQChart Mini Program Tutorial 1-How to quickly create a candlestick chart](https://developers.weixin.qq.com/community/develop/article/doc/0006c451ac81589915b89d1c55bc13) <br>
2. [HQChart Mini Program Tutorial 2-How to use the new version of 2D canvas to create a candlestick chart](https://blog.csdn.net/jones2000/article/details/105632095)<br>
3. [HQChart Mini Program Tutorial 3-How to switch between K-line chart and time-sharing chart in the new version of 2D single canvas](https://blog.csdn.net/jones2000/article/details/108378355)<br>

## uni-app tutorial
1. [HQChart tutorial 79- tutorial on using hqchart built-in components in uniapp](https://blog.csdn.net/jones2000/article/details/116592718)<br>
2. [HQChart tutorial 35-How to create a candlestick chart in uni-app (h5)](https://blog.csdn.net/jones2000/article/details/101039026) <br>
3. [HQChart Tutorial 36-How to create a trend chart in uni-app (h5)](https://blog.csdn.net/jones2000/article/details/101039673) <br>
4. [HQChart tutorial 37-How to create a bar chart (app) in uni-app](https://blog.csdn.net/jones2000/article/details/101075683) <br>
5. [HQChart Tutorial 38-How to create a trend chart in uni-app (app)](https://blog.csdn.net/jones2000/article/details/101481960) <br>
6. [HQChart tutorial 44-uniapp use conditional compilation and support h5, app, applet](https://blog.csdn.net/jones2000/article/details/102529190) <br>
7. [HQChart tutorial 60-Solve the problem of displaying a white screen after the uniapp-app page is hidden](https://blog.csdn.net/jones2000/article/details/105484202) <br>
8. [HQChart tutorial 63-uniapp using renderjs+hqchart(h5)](https://blog.csdn.net/jones2000/article/details/106933985)<br>
9. [HQChart actual combat tutorial 40-how to make hqchart components (uniapp version)](https://blog.csdn.net/jones2000/article/details/116034602)<br>
## 3rd party data front-end access tutorial (trend chart)
1. [HQChart Tutorial 29-How to Connect the Trend Chart to the 3rd Party Data 1](https://blog.csdn.net/jones2000/article/details/100132357) <br>
2. [HQChart tutorial 29-How to connect the trend chart to the third party data 2-Latest time-sharing data](https://blog.csdn.net/jones2000/article/details/100149703) <br>
3. [HQChart tutorial 29-How to connect the trend chart with third-party data 3-multi-day time-sharing data](https://blog.csdn.net/jones2000/article/details/100150842) <br>
4. [HQChart Tutorial 29-How to Connect the Trend Chart to the 3rd Party Data 4-Overlay Stock Time-sharing Data](https://blog.csdn.net/jones2000/article/details/100167703) <br>
5. [HQChart Tutorial 29-How to Connect the Trend Chart to the 3rd Party Data 4-Transaction Prompt Information](https://blog.csdn.net/jones2000/article/details/100516071) <br>
6. [HQChart Tutorial 29-How to Connect the Trend Chart to the 3rd Party Data 5-Indicator Data](https://blog.csdn.net/jones2000/article/details/102426337) <br>
7. [HQChart tutorial 29-How to connect the third party data 6-websocket minute data] (https://blog.csdn.net/jones2000/article/details/102568258) <br>
8. [HQChart tutorial 29-How to connect the trend chart to the third party data 7-Superimpose the latest time-sharing data of stocks](https://blog.csdn.net/jones2000/article/details/110525351) <br>

## Third party data front-end access tutorial (K-line diagram)
1. [HQChart tutorial 30-K-line chart how to dock the third party data 1](https://blog.csdn.net/jones2000/article/details/100181279) <br>
2. [HQChart tutorial 30-K-line chart how to dock third party data 2-day K data](https://blog.csdn.net/jones2000/article/details/100552022) <br>
3. [HQChart use tutorial 30-K-line chart how to dock 3rd party data 3-1 minute K data](https://blog.csdn.net/jones2000/article/details/100557649) <br>
4. [HQChart tutorial 30-K-line chart how to dock third party data 4-tradable equity data] (https://blog.csdn.net/jones2000/article/details/100574186) <br>
5. [HQChart tutorial 30-K-line chart how to dock third party data 5-indicator data](https://blog.csdn.net/jones2000/article/details/100579223) <br>
6. [HQChart tutorial 30-K-line chart how to dock 3rd party data 6-divided K-line data](https://blog.csdn.net/jones2000/article/details/100671849) <br>
7. [HQChart tutorial 30-K line chart how to dock the third party data 7-day K data pagination download](https://blog.csdn.net/jones2000/article/details/101275824)<br>
8. [HQChart tutorial 30-K-line chart how to dock the third party data 8-1 minute K-line data pagination download](https://blog.csdn.net/jones2000/article/details/101277092) <br>
9. [HQChart use tutorial 30-K-line chart how to dock the third party data 9-BS indicator data](https://blog.csdn.net/jones2000/article/details/101350429) <br>
10. [HQChart tutorial 30-How to dock the third party data with K-line chart 10-How to draw custom line segment or multi-line index data](https://blog.csdn.net/jones2000/article/details/101694618)< br>
11. [HQChart tutorial 30-K-line chart how to dock the third party data 11-how to draw multiple sets of custom icons](https://blog.csdn.net/jones2000/article/details/101757384) <br>
12. [HQChart tutorial 30-How to dock the third party data with candlestick chart 12-How to draw text in the indicator](https://blog.csdn.net/jones2000/article/details/101864046) <br>
13. [HQChart tutorial 30-K-line chart how to dock the third party data 13-Use websocket to update the latest K-line data](https://blog.csdn.net/jones2000/article/details/102138784) <br>
14. [HQChart tutorial 30-K-line chart how to dock third party data 14-polling incremental update daily K data](https://blog.csdn.net/jones2000/article/details/102518334) <br>
15. [HQChart tutorial 30-How to dock the K-line chart with the third-party data 15-Polling incremental update 1 minute K-line data](https://blog.csdn.net/jones2000/article/details/102518422) < br>
16. [HQChart tutorial 30-K line chart how to dock the third party data 16-day K superimposed stock] (https://blog.csdn.net/jones2000/article/details/102661873) <br>
17. [HQChart tutorial 30-K-line chart how to dock the third party data 17-minute K superimposed stock] (https://blog.csdn.net/jones2000/article/details/102887690) <br>
18. [HQChart tutorial 30-K-line chart how to dock the third party data 18-how to draw custom columns](https://blog.csdn.net/jones2000/article/details/104417736)<br>
19. [HQChart tutorial 30-How to dock the third party data with candlestick chart 19-How to draw color candlesticks](https://blog.csdn.net/jones2000/article/details/104859784)<br>
20. [HQChart use tutorial 30-K-line chart how to dock third party data 20-information announcement data](https://blog.csdn.net/jones2000/article/details/105876161)<br>
21. [HQChart tutorial 30-K-line chart how to dock third party data 21-cross-period function data](https://blog.csdn.net/jones2000/article/details/109063625)<br>
22. [HQChart tutorial 30-K-line chart how to dock the third party data 22-FINVALUE function data](https://blog.csdn.net/jones2000/article/details/111387095)<br>
23. [HQChart tutorial 30-K-line chart how to dock the third party data 23-FINANCE function data](https://blog.csdn.net/jones2000/article/details/111999910)<br>
24. [HQChart tutorial 30-How to dock the K-line chart with the third party data 24-How to fill the K-line background color](https://blog.csdn.net/jones2000/article/details/112342980)<br>
25. [HQChart tutorial 30-K-line chart how to dock third party data 25-index script custom variables](https://blog.csdn.net/jones2000/article/details/112755911)<br>
26. [HQChart tutorial 30-How to dock the third party data with K-line chart 26-Indicator script custom function](https://blog.csdn.net/jones2000/article/details/112809781)<br>
27. [HQChart tutorial 30-K-line chart how to dock the third party data 27-How to render DOM elements in the indicator](https://blog.csdn.net/jones2000/article/details/114006164)<br>
28. [HQChart tutorial 30-K-line chart how to dock third party data 28-market data](https://blog.csdn.net/jones2000/article/details/117712105)<br>
29. [HQChart tutorial 30-K-line chart how to dock the third party data 29-plate string function data](https://jones2000.blog.csdn.net/article/details/118887416)<br>
30. [HQChart tutorial 30-K-line chart how to dock third party data 30-real-time market data DYNAINFO](https://jones2000.blog.csdn.net/article/details/120276612)<br>
## Practical tutorial
1. [HQChart Actual Combat Tutorial 1-Forex Time Sharing Chart](https://blog.csdn.net/jones2000/article/details/103254501) <br>
2. [HQChart Practical Tutorial 2-Using Cross-Cycle Writing Indicators](https://blog.csdn.net/jones2000/article/details/103275668) <br>
3. [HQChart actual combat tutorial 3-http+ws docking minute K-line data](https://blog.csdn.net/jones2000/article/details/103882063) <br>
4. [HQChart actual combat tutorial 4-http+ws docking date K-line data](https://blog.csdn.net/jones2000/article/details/103966271) <br>
5. [HQChart actual combat tutorial 5-http+ws docking single-day time-sharing chart data](https://blog.csdn.net/jones2000/article/details/103966925) <br>
6. [HQChart actual combat tutorial 6-custom time-sharing chart](https://blog.csdn.net/jones2000/article/details/104165374) <br>
7. [HQChart actual combat tutorial 7-Custom display gestures, click on the K line to display information](https://blog.csdn.net/jones2000/article/details/104168610) <br>
8. [HQChart actual combat tutorial 8-How to manually reinitialize hqchart](https://blog.csdn.net/jones2000/article/details/105302626)<br>
9. [HQChart actual combat tutorial 9-custom A-share time-sharing chart](https://blog.csdn.net/jones2000/article/details/105587559) <br>
10. [HQChart actual combat tutorial 14-K-line chart docking with the third party http/https data tutorial finishing](https://blog.csdn.net/jones2000/article/details/106064879)<br>
11. [HQChart actual combat tutorial 17-K line sand table deduction](https://blog.csdn.net/jones2000/article/details/106776837) <br>
12. [HQChart Actual Combat Tutorial 18-Multiple shares in the same column](https://blog.csdn.net/jones2000/article/details/107193410)<br>
13. [HQChart Actual Combat Tutorial 45-Custom Indicator Window Background](https://jones2000.blog.csdn.net/article/details/119886468)<br>

## Huobi integration tutorial (paid article)
1. [HQChart Actual Combat Tutorial 10-Full WS Data Docking HQChart (Digital Currency Docking Actual Combat)](https://blog.csdn.net/jones2000/article/details/105698038) <br>
2. [HQChart actual combat tutorial 11-Huobi ws data docking](https://blog.csdn.net/jones2000/article/details/105721190) <br>
3. [HQChart actual combat tutorial 12-Huobi ws data docking time-sharing chart](https://blog.csdn.net/jones2000/article/details/105756659) <br>
4. [HQChart actual combat tutorial 13-Huobi ws data docking K line (uniapp)](https://blog.csdn.net/jones2000/article/details/105804461)<br>
5. [HQChart actual combat tutorial 15-Huobi ws data docking drag and drop download historical K-line chart](https://blog.csdn.net/jones2000/article/details/106205584)<br>
6. [HQChart actual combat tutorial 16-K-line chart style color matching articles-Huobi H5 color matching](https://blog.csdn.net/jones2000/article/details/106226272)<br>
## Source code charges
1. [HQChart actual combat tutorial 36-Digital currency Binance docking-uniapp version](https://blog.csdn.net/jones2000/article/details/114468807)<br>
2. [HQChart actual combat tutorial 41-Sina+Tencent A-share data source docking-uniapp version](https://blog.csdn.net/jones2000/article/details/117139756)<br>
3. [HQChart actual combat tutorial 42-Sina futures data source docking-uniapp version](https://blog.csdn.net/jones2000/article/details/117757956)<br>
4. [Example of stock time-sharing chart of the day, using Oriental Fortune web data](https://download.csdn.net/download/jones2000/22589484)<br>
5. [Example of stock 5-day time-sharing chart, using Eastern Fortune web data](https://download.csdn.net/download/jones2000/22761465)<br>
6. [Example of stock daily candlestick chart, using data from Oriental Fortune webpage](https://download.csdn.net/download/jones2000/27232461)<br>
7. [Example of stock minute candlestick chart, using data from Oriental Fortune webpage](https://download.csdn.net/download/jones2000/27765290)<br>

## httpA share data docking tutorial (paid article)
### Daily K line
1. [HQChart actual combat tutorial 29-A share daily K-line data docking-Vue version](https://blog.csdn.net/jones2000/article/details/113099783)<br>
2. [HQChart actual combat tutorial 30-A share daily K-line data docking-uniapp version](https://blog.csdn.net/jones2000/article/details/113101342)<br>
3. [HQChart actual combat tutorial 34-A share daily K-line data docking-small program version](https://blog.csdn.net/jones2000/article/details/113577904)<br>
### Minute K Line
1. [HQChart actual combat tutorial 31-A share minute K-line data docking-Vue version](https://blog.csdn.net/jones2000/article/details/113101407)<br>
2. [HQChart actual combat tutorial 32-A shares minute K-line data docking-uniapp version](https://blog.csdn.net/jones2000/article/details/113101448)<br>
### Time-sharing chart
1. [HQChart actual combat tutorial 33-A share time-sharing chart data docking-Vue version](https://blog.csdn.net/jones2000/article/details/113226866)<br>
2. [HQChart actual combat tutorial 35-A share time-sharing chart data docking-uniapp version](https://blog.csdn.net/jones2000/article/details/113777111)<br>
### Backstage indicators
1. [HQChart Actual Combat Tutorial 36-A Shares Backstage Indicator Docking-uniapp Version](https://blog.csdn.net/jones2000/article/details/114991081)<br>
### Sina interface docking
1. [HQChart actual combat tutorial 37-Sina minute K-line data docking-js version](https://blog.csdn.net/jones2000/article/details/115388377)<br>
2. [HQChart actual combat tutorial 38-Sina futures data docking-js version](https://blog.csdn.net/jones2000/article/details/115408971)<br>
## Advanced application practical tutorial (paid article)
1. [HQChart Actual Combat Tutorial 19-PC time-sharing chart customization tooltip](https://blog.csdn.net/jones2000/article/details/108633991)<br>
2. [HQChart Actual Combat Tutorial 20-K-line chart customization tooltip on PC](https://blog.csdn.net/jones2000/article/details/108639960)<br>
3. [HQChart actual combat tutorial 21-unapp app side time-sharing chart customization tooltip](https://blog.csdn.net/jones2000/article/details/108657043)<br>
4. [HQChart actual combat tutorial 21-uniapp app side K-line chart customization tooltip](https://blog.csdn.net/jones2000/article/details/108674679)<br>
5. [HQChart Actual Combat Tutorial 22-PC-side custom interval selection menu](https://blog.csdn.net/jones2000/article/details/108907629)<br>
6. [HQChart Actual Combat Tutorial 23-Click the K line to display the historical minute chart](https://blog.csdn.net/jones2000/article/details/109127873)<br>
7. [HQChart Actual Combat Tutorial 24-Custom K-Line Drawing Tool Setting Box (Line Segment)](https://blog.csdn.net/jones2000/article/details/109217719)<br>
8. [HQChart actual combat tutorial 25-Custom K-line drawing tool setting box (text type)](https://blog.csdn.net/jones2000/article/details/109267078)<br>
9. [HQChart Actual Combat Tutorial 30-Configure K-Line Drawing](https://blog.csdn.net/jones2000/article/details/113819121)<br>
10. [HQChart actual combat tutorial 26-K-line drawing tool adds custom icons](https://blog.csdn.net/jones2000/article/details/109529224)<br>
11. [HQChart Actual Combat Tutorial 27-Add animation points to the last data of the trend chart](https://blog.csdn.net/jones2000/article/details/111599341)<br>
12. [HQChart Actual Combat Tutorial 28-Dynamically Switch Color Style](https://blog.csdn.net/jones2000/article/details/112563596)<br>
13. [HQChart Actual Combat Tutorial 29-Save indicator parameters to local cache](https://blog.csdn.net/jones2000/article/details/113349967)<br>
14. [HQChart Actual Combat Tutorial 39-K-line chart keyboard event reload](https://blog.csdn.net/jones2000/article/details/115921430)<br>
15. [HQChart Actual Combat Tutorial 43-Add animation points to the last data of K-line area chart](https://jones2000.blog.csdn.net/article/details/118774299)<br>
16. [HQChart Actual Combat Tutorial 44-Multi-indicator Window Dynamic Growth Height](https://jones2000.blog.csdn.net/article/details/119188383)<br>
17. [HQChart actual combat tutorial 46-click on the right button of the cross cursor to increase the tick mark](HQChart actual combat tutorial 46-click on the right button of the cross cursor to increase the tick mark)<br>




## Design document:
1. [How to (c++,js) write a traditional K-line chart and trend chart 1](https://blog.csdn.net/jones2000/article/details/84779481) <br>
2. [How to (c++,js) write a traditional K-line chart and trend chart 2-trend chart](https://blog.csdn.net/jones2000/article/details/84840770) <br>
3. [How to (c++, js) write a traditional K-line chart and trend chart 3-How to realize the multi-index window mode](https://blog.csdn.net/jones2000/article/details/84979910) <br >
4. [How to (c++,js) write a traditional K-line chart and trend chart 3-Drawing of cross cursor](https://blog.csdn.net/jones2000/article/details/85123680) <br>
5. [How to (c++,js) write a traditional K-line chart and trend chart 4-K-line chart](https://blog.csdn.net/jones2000/article/details/85235463) <br>
6. [How to (c++,js) write a traditional K-line chart and trend chart 5-Mobile chip chart](https://blog.csdn.net/jones2000/article/details/85356163) <br>
## HQChartPy2 introduction (py version indicator engine)
1. [HQChart(C++) Indicator Calculation Engine-Introduction](https://blog.csdn.net/jones2000/article/details/107464517) <br>
2. [HQChart(C++) Indicator Calculation Engine-Installation](https://blog.csdn.net/jones2000/article/details/107712259) <br>
3. [HQChart (C++) indicator calculation engine-py interface class FastHQChart introduction](https://blog.csdn.net/jones2000/article/details/107725170) <br>
4. [HQChart(C++) indicator calculation engine-py interface class IHQData K-line data docking](https://blog.csdn.net/jones2000/article/details/107728903) <br>

## HQChartPy2 data docking tutorial (take tushare data as an example)
1. [hqchartPy2 data docking tutorial 1-K line data](https://blog.csdn.net/jones2000/article/details/112060412)<br>
2. [hqchartPy2 Data Docking Tutorial 2- Equity Data, Chip Distribution Function](https://blog.csdn.net/jones2000/article/details/112060761)<br>
3. [hqchartPy2 Data Docking Tutorial 3-FINANCE Data](https://blog.csdn.net/jones2000/article/details/112095070)<br>
4. [hqchartPy2 data docking tutorial 4-DYNAINFO function](https://blog.csdn.net/jones2000/article/details/112334485)<br>
5. [hqchartPy2 data docking tutorial 5-reference specified stock data function](https://blog.csdn.net/jones2000/article/details/112335307)<br>
6. [hqchartPy2 indicator stock picking-KDJ stock picking](https://blog.csdn.net/jones2000/article/details/113667444)<br>

# 5. VUE market quotation items
[Code address(vuehqchart)](/vuehqchart) <br>
![Chart 2](/Mini Program Quotes Module Use Case/image/pch5hq.PNG)
[Market page address (v1.0)](https://opensource2.zealink.com/vuehqweb/hq.demo.page.html) <br><br>
![Historical high-frequency data query Figure 2](/Mini Program Market Module Use Case/image/pch5history.PNG)
[Query page address](https://opensource2.zealink.com/vuehqweb/queryContent.demo.page.html) <br><br>
![Multi-period chart 2](/Small program market quotation module use case/image/pch5hq2.png)
[Multi-period page address](https://opensource2.zealink.com/vuehqweb/stockmultiperiod.demo.page.html) <br><br>
![Comprehensive Ranking 2](/Mini Program Quotes Module Use Case/image/pch5hq3.png)
[Comprehensive ranking page address](https://opensource2.zealink.com/vuehqweb/stockmultiorder.demo.page.html) <br><br>
   
## Samples developed for customers based on the VUE version
![PC Quotes Page](/Mini Program Quotes Module Use Case/image/hqchart_pc_demo1.png) <br>
[Index quotation page black style](https://opensource2.zealink.com/cninfoHq/oneStockHq.html?symbol=000001.sh&colorType=black) <br>
[Individual stock quote page white style](https://opensource2.zealink.com/cninfoHq/oneStockHq.html?symbol=000001.sz) <br>
[Code address(vue.demo/infoHqdemo)](/vue.demo/infoHqdemo) <br>

## VUE version mobile terminal sample 1
![Mobile phone market quotation page](/Mini program market quotation module use case/image/hchart_phone_1.png) <br>
[Mobile phone market quotation page](https://opensource2.zealink.com/product/hqNewdemoH5/stockHq.html#/StockHq)<br>
[Code address(vue.demo/hq_h5_pages)](/vue.demo/hq_h5_pages) <br>
## VUE version mobile phone sample 2 black style
![Mobile phone market quotation page](/Mini program market quotation module use case/image/hqchart_phone_3.png) <br>
![Mobile phone market quotation page](/Mini program market quotation module use case/image/hqchart_phone_4.png) <br>
[Mobile market quotation page](https://opensource2.zealink.com/hqweb/hq_h5_demo_black/stockHq.html#/StockHq)<br>
[Code address(vue.demo/hq_h5_pages)](/vue.demo/hq_h5_demo_black) <br>


## js page sample
![Mobile phone market quotation page](/Mini program market quotation module use case/image/hqchart_phone_2.png) <br>
[Individual stock details mobile terminal h5](https://opensource2.zealink.com/hqweb/hqpages/stockpage.html?) <br>
[Code address(webhqchart.demo/h5demo)](/webhqchart.demo/h5demo) <br>
[VUE code address(vue.demo/stockpage_h5)](/vue.demo/stockpage_h5) <br>

## 3rd party data connection example
1. Digital currency docking <br>
   Data source: https://www.coinzeus.io/cn <br>
   ![Quotes page](/Mini Program Quotes Module Use Case/image/hqchart_bit_demo1.png) <br>
   [h5 test page](https://opensource.zealink.com/hqweb/bitdemo/stockhq.html) <br>
   [Code address(vue.demo/bitdemo)](/vue.demo/bitdemo) <br>


# QQ exchange group (950092318)
There are bugs, problems, new functional requirements can be mentioned in the QQ group <br>
![QQ群](/Mini Program Quotes Module Use Case/image/qqcode.png)

# Business
For custom development, cooperation and other business matters, please contact QQ: 22047567

# Awards
![GVP](/Mini Program Quotes Module Use Case/image/gvp.jpg)

# Sponsor
![WeChat QR Code](/Mini Program Quotes Module Use Case/image/wx_code.PNG)
