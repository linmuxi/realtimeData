$(function() {
    var tv = function(opts){
		this.options = $.extend(true, tv.DEFAULTS,opts);
		this.jobs = {};
		this._init.call(this);
    }

    tv.DEFAULTS = {
    	//60分钟刷新一次页面数据
    	refresh_interval:600000,//test:10min
    };
    var i = 1;
    tv.prototype = {
		constructor:tv,
		_init:function(){
			this._initChart();
			var result = this._ajax();
			this._loadMap(result?result.departmentLocation:[]);
		},
		_ajax:function(){
			try{
				var result;
				var test = true;
				if(test){
					result = {
							"departmentLocation": [
			               		{
			               			"latitude": 38.924102,
			               			"longitude": 121.646613,
			               			"name": "大连中山"
			               		},
			               		{
			               			"latitude": 39.631025,
			               			"longitude": 118.176567,
			               			"name": "唐山路南"
			               		},
			               		{
			               			"latitude": 30.260322,
			               			"longitude": 120.179077,
			               			"name": "杭州上城"
			               		},
			               		{
			               			"latitude": 31.821139,
			               			"longitude": 119.979711,
			               			"name": "常州新北"
			               		},
			               		{
			               			"latitude": 32.05643,
			               			"longitude": 118.790973,
			               			"name": "南京玄武"
			               		},
			               		{
			               			"latitude": 32.073843,
			               			"longitude": 112.130842,
			               			"name": "襄阳樊城"
			               		},
			               		{
			               			"latitude": 32.379536,
			               			"longitude": 119.417494,
			               			"name": "扬州邗江"
			               		},
			               		{
			               			"latitude": 38.05145,
			               			"longitude": 114.512191,
			               			"name": "石家庄勒泰"
			               		},
			               		{
			               			"latitude": 23.660462,
			               			"longitude": 114.027106,
			               			"name": "深圳龙华"
			               		},
			               		{
			               			"latitude": 46.578703,
			               			"longitude": 125.115955,
			               			"name": "大庆萨尔图"
			               		},
			               		{
			               			"latitude": 45.814415,
			               			"longitude": 126.541842,
			               			"name": "哈尔滨道里"
			               		},
			               		{
			               			"latitude": 22.545152,
			               			"longitude": 114.084348,
			               			"name": "深圳福田"
			               		},
			               		{
			               			"latitude": 22.518156,
			               			"longitude": 113.387636,
			               			"name": "中山东区"
			               		},
			               		{
			               			"latitude": 24.336266,
			               			"longitude": 109.442053,
			               			"name": "柳州城中"
			               		},
			               		{
			               			"latitude": 22.549109,
			               			"longitude": 114.088649,
			               			"name": "深圳中航"
			               		},
			               		{
			               			"latitude": 23.546925,
			               			"longitude": 115.123366,
			               			"name": "深圳罗湖"
			               		},
			               		{
			               			"latitude": 37.554379,
			               			"longitude": 121.389967,
			               			"name": "烟台芝罘"
			               		},
			               		{
			               			"latitude": 41.819928,
			               			"longitude": 123.443631,
			               			"name": "沈阳沈河"
			               		},
			               		{
			               			"latitude": 36.725137,
			               			"longitude": 119.135793,
			               			"name": "潍坊奎文"
			               		},
			               		{
			               			"latitude": 43.894006,
			               			"longitude": 125.32779,
			               			"name": "长春朝阳"
			               		},
			               		{
			               			"latitude": 22.573383,
			               			"longitude": 111.874059,
			               			"name": "深圳宝安"
			               		},
			               		{
			               			"latitude": 30.703948,
			               			"longitude": 111.298387,
			               			"name": "宜昌西陵"
			               		},
			               		{
			               			"latitude": 31.841777,
			               			"longitude": 117.23859,
			               			"name": "合肥蜀山"
			               		}
			               	],
			               	"hourApplyQuantity": {
			               		"detail": [
			               			{
			               				"count": 5,
			               				"hour": "08:00"
			               			},
			               			{
			               				"count": 12,
			               				"hour": "09:00"
			               			},
			               			{
			               				"count": 16,
			               				"hour": "10:00"
			               			},
			               			{
			               				"count": 17,
			               				"hour": "11:00"
			               			},
			               			{
			               				"count": 2,
			               				"hour": "12:00"
			               			},
			               			{
			               				"count": 10,
			               				"hour": "13:00"
			               			},
			               			{
			               				"count": 30,
			               				"hour": "14:00"
			               			},
			               			{
			               				"count": 36,
			               				"hour": "15:00"
			               			},
			               			{
			               				"count": 37,
			               				"hour": "16:00"
			               			},
			               			{
			               				"count": 47,
			               				"hour": "17:00"
			               			},
			               			{
			               				"count": 22,
			               				"hour": "18:00"
			               			},
			               			{
			               				"count": 7,
			               				"hour": "19:00"
			               			},
			               			{
			               				"count": 4,
			               				"hour": "20:00"
			               			}
			               		],
			               		"goal": 0
			               	},
			               	"hourApproveMoney": {
			               		"detail": [
			               			{
			               				"money": 9,
			               				"hour": "09:00"
			               			},
			               			{
			               				"money": 23,
			               				"hour": "10:00"
			               			},
			               			{
			               				"money": 72,
			               				"hour": "11:00"
			               			},
			               			{
			               				"money": 6,
			               				"hour": "12:00"
			               			},
			               			{
			               				"money": 44,
			               				"hour": "13:00"
			               			},
			               			{
			               				"money": 89,
			               				"hour": "14:00"
			               			},
			               			{
			               				"money": 71,
			               				"hour": "15:00"
			               			},
			               			{
			               				"money": 87,
			               				"hour": "16:00"
			               			},
			               			{
			               				"money": 62,
			               				"hour": "17:00"
			               			},
			               			{
			               				"money": 40,
			               				"hour": "18:00"
			               			},
			               			{
			               				"money": 104,
			               				"hour": "19:00"
			               			},
			               			{
			               				"money": 36,
			               				"hour": "20:00"
			               			}
			               		],
			               		"goal": 0
			               	},
			               	"hourSignMoney": {
			               		"detail": [
			               			{
			               				"money": 5,
			               				"hour": "09:00"
			               			},
			               			{
			               				"money": 33,
			               				"hour": "10:00"
			               			},
			               			{
			               				"money": 23,
			               				"hour": "11:00"
			               			},
			               			{
			               				"money": 76,
			               				"hour": "12:00"
			               			},
			               			{
			               				"money": 56,
			               				"hour": "13:00"
			               			},
			               			{
			               				"money": 84,
			               				"hour": "14:00"
			               			},
			               			{
			               				"money": 82,
			               				"hour": "15:00"
			               			},
			               			{
			               				"money": 50,
			               				"hour": "16:00"
			               			},
			               			{
			               				"money": 74,
			               				"hour": "17:00"
			               			},
			               			{
			               				"money": 94,
			               				"hour": "18:00"
			               			},
			               			{
			               				"money": 29,
			               				"hour": "19:00"
			               			},
			               			{
			               				"money": 3,
			               				"hour": "20:00"
			               			}
			               		],
			               		"goal": 0
			               	},
			               	"monthLoanMoney": 6759,
			               	"todayBorrowerDetail": [
			               		{
			               			"text": "广东深圳王女士借款3万元,用于装修(20:04)"
			               		},
			               		{
			               			"text": "辽宁大连石女士借款8万元,用于资金周转(19:21)"
			               		},
			               		{
			               			"text": "广东深圳容先生借款4万元,用于周转（旺季）(19:17)"
			               		},
			               		{
			               			"text": "辽宁大连于先生借款4万元,用于资金周转(19:16)"
			               		},
			               		{
			               			"text": "辽宁大连王先生借款3万元,用于资金周转(19:14)"
			               		},
			               		{
			               			"text": "广西壮族自治来宾姜先生借款5万元,用于扩大经营(19:14)"
			               		},
			               		{
			               			"text": "广东深圳林先生借款5万元,用于扩大经营(19:12)"
			               		},
			               		{
			               			"text": "湖北荆州倪女士借款5万元,用于扩大经营(18:41)"
			               		},
			               		{
			               			"text": "广东深圳李女士借款4万元,用于资金周转(18:40)"
			               		},
			               		{
			               			"text": "湖北荆门王女士借款3万元,用于资金周转(18:32)"
			               		},
			               		{
			               			"text": "湖北襄阳巴先生借款5万元,用于扩大经营(18:31)"
			               		},
			               		{
			               			"text": "广东深圳黄先生借款3万元,用于个人消费(18:22)"
			               		},
			               		{
			               			"text": "湖北襄阳贾先生借款4万元,用于进货(18:21)"
			               		},
			               		{
			               			"text": "江苏镇江曾先生借款5万元,用于装修(18:20)"
			               		},
			               		{
			               			"text": "河北唐山贾先生借款8万元,用于资金周转(18:18)"
			               		},
			               		{
			               			"text": "黑龙江大庆马先生借款5万元,用于扩大经营(18:17)"
			               		},
			               		{
			               			"text": "山东烟台盛先生借款6万元,用于兼职经营(18:17)"
			               		},
			               		{
			               			"text": "黑龙江大庆岳先生借款4万元,用于装修(18:16)"
			               		},
			               		{
			               			"text": "山东烟台初先生借款6万元,用于购买设备(18:14)"
			               		},
			               		{
			               			"text": "辽宁大连王女士借款6万元,用于资金周转(18:11)"
			               		},
			               		{
			               			"text": "河北石家庄丁先生借款4万元,用于装修(18:10)"
			               		},
			               		{
			               			"text": "辽宁大连李先生借款5万元,用于扩大经营(18:06)"
			               		},
			               		{
			               			"text": "江苏常州彭先生借款4万元,用于资金周转(18:03)"
			               		},
			               		{
			               			"text": "河北石家庄樊先生借款3万元,用于扩大经营(18:02)"
			               		},
			               		{
			               			"text": "辽宁大连王先生借款5万元,用于投资创业(18:01)"
			               		},
			               		{
			               			"text": "山东潍坊杨先生借款4万元,用于扩大经营(18:00)"
			               		},
			               		{
			               			"text": "辽宁大连宁女士借款5万元,用于扩大经营(18:00)"
			               		},
			               		{
			               			"text": "吉林长春卢先生借款8万元,用于扩大经营(17:58)"
			               		},
			               		{
			               			"text": "江苏常州刘先生借款4万元,用于资金周转(17:57)"
			               		},
			               		{
			               			"text": "河北石家庄李先生借款6万元,用于扩大经营(17:44)"
			               		},
			               		{
			               			"text": "黑龙江大庆王先生借款3万元,用于购房(17:40)"
			               		},
			               		{
			               			"text": "黑龙江哈尔滨冯女士借款6万元,用于扩大经营(17:34)"
			               		},
			               		{
			               			"text": "吉林长春高先生借款8万元,用于装修(17:29)"
			               		},
			               		{
			               			"text": "河北石家庄徐女士借款3万元,用于扩大经营(17:24)"
			               		},
			               		{
			               			"text": "河北石家庄杨先生借款4万元,用于扩大经营(17:22)"
			               		},
			               		{
			               			"text": "吉林长春张先生借款4万元,用于购车(17:21)"
			               		},
			               		{
			               			"text": "黑龙江哈尔滨年先生借款3万元,用于扩大经营(17:18)"
			               		},
			               		{
			               			"text": "黑龙江哈尔滨刘先生借款5万元,用于装修(17:15)"
			               		},
			               		{
			               			"text": "黑龙江哈尔滨王先生借款5万元,用于扩大经营(17:11)"
			               		},
			               		{
			               			"text": "辽宁大连程先生借款4万元,用于资金周转(17:08)"
			               		},
			               		{
			               			"text": "辽宁大连阎女士借款4万元,用于资金周转(17:04)"
			               		},
			               		{
			               			"text": "山东潍坊朱女士借款3万元,用于扩大经营(17:03)"
			               		},
			               		{
			               			"text": "黑龙江哈尔滨唐女士借款4万元,用于扩大经营(17:00)"
			               		},
			               		{
			               			"text": "山东潍坊宿女士借款4万元,用于装修(16:59)"
			               		},
			               		{
			               			"text": "山东潍坊徐先生借款2万元,用于进货(16:57)"
			               		},
			               		{
			               			"text": "黑龙江大庆韩先生借款5万元,用于装修(16:54)"
			               		},
			               		{
			               			"text": "广西壮族自治柳州李先生借款5万元,用于扩大经营(16:53)"
			               		},
			               		{
			               			"text": "辽宁沈阳方先生借款7万元,用于装修(16:45)"
			               		},
			               		{
			               			"text": "广西壮族自治贵港潘女士借款4万元,用于装修(16:38)"
			               		},
			               		{
			               			"text": "辽宁沈阳陈先生借款6万元,用于购车(16:22)"
			               		},
			               		{
			               			"text": "广东深圳胡先生借款12万元,用于扩大经营(16:20)"
			               		},
			               		{
			               			"text": "广东深圳潘先生借款5万元,用于购买材料(16:09)"
			               		},
			               		{
			               			"text": "江苏常州汤先生借款6万元,用于扩大经营(15:58)"
			               		},
			               		{
			               			"text": "江苏扬州陈先生借款3万元,用于资金周转(15:45)"
			               		},
			               		{
			               			"text": "江苏扬州姚先生借款7万元,用于装修(15:43)"
			               		},
			               		{
			               			"text": "辽宁沈阳王先生借款4万元,用于装修(15:40)"
			               		},
			               		{
			               			"text": "广东深圳张先生借款3万元,用于装修(15:33)"
			               		},
			               		{
			               			"text": "辽宁沈阳李女士借款5万元,用于装修(15:25)"
			               		},
			               		{
			               			"text": "山东烟台高先生借款4万元,用于投资创业(15:17)"
			               		},
			               		{
			               			"text": "山东烟台贺先生借款10万元,用于扩大经营(15:15)"
			               		},
			               		{
			               			"text": "河北秦皇岛王先生借款10万元,用于资金周转(15:11)"
			               		},
			               		{
			               			"text": "河北唐山马女士借款5万元,用于资金周转(15:11)"
			               		},
			               		{
			               			"text": "河北唐山冯女士借款4万元,用于扩大经营(15:11)"
			               		},
			               		{
			               			"text": "河北唐山许先生借款3万元,用于资金周转(15:06)"
			               		},
			               		{
			               			"text": "河北唐山吴先生借款4万元,用于扩大经营(15:06)"
			               		},
			               		{
			               			"text": "河北唐山李女士借款4万元,用于资金周转(15:06)"
			               		},
			               		{
			               			"text": "江苏南京林女士借款5万元,用于个人消费(15:05)"
			               		},
			               		{
			               			"text": "河北承德刘先生借款3万元,用于资金周转(14:50)"
			               		},
			               		{
			               			"text": "河北秦皇岛孙先生借款2万元,用于投资创业(14:45)"
			               		},
			               		{
			               			"text": "河北唐山张先生借款5万元,用于扩大经营(14:43)"
			               		},
			               		{
			               			"text": "浙江杭州黎女士借款8万元,用于支付货款(14:40)"
			               		},
			               		{
			               			"text": "河北唐山周先生借款3万元,用于资金周转(14:36)"
			               		},
			               		{
			               			"text": "黑龙江大庆何先生借款4万元,用于资金周转(14:36)"
			               		},
			               		{
			               			"text": "山东潍坊罗女士借款3万元,用于扩大经营(14:34)"
			               		},
			               		{
			               			"text": "浙江杭州章先生借款6万元,用于资金周转(14:26)"
			               		},
			               		{
			               			"text": "广东深圳张女士借款50万元,用于扩大经营(14:23)"
			               		},
			               		{
			               			"text": "吉林长春吕先生借款5万元,用于装修(13:58)"
			               		},
			               		{
			               			"text": "黑龙江哈尔滨王女士借款4万元,用于资金周转(13:57)"
			               		},
			               		{
			               			"text": "辽宁辽阳韩先生借款5万元,用于装修(13:40)"
			               		},
			               		{
			               			"text": "广东深圳张女士借款8万元,用于购买材料(13:37)"
			               		},
			               		{
			               			"text": "湖北襄阳党先生借款4万元,用于资金周转(13:31)"
			               		},
			               		{
			               			"text": "吉林长春龙女士借款4万元,用于扩大经营(13:30)"
			               		},
			               		{
			               			"text": "吉林长春刘女士借款5万元,用于装修(13:28)"
			               		},
			               		{
			               			"text": "山东潍坊鲁先生借款3万元,用于购买原材料(13:19)"
			               		},
			               		{
			               			"text": "山东潍坊胡先生借款2万元,用于装修房子(13:16)"
			               		},
			               		{
			               			"text": "广东深圳张先生借款3万元,用于买货(13:10)"
			               		},
			               		{
			               			"text": "山东潍坊刘女士借款3万元,用于扩大经营(13:05)"
			               		},
			               		{
			               			"text": "江苏南京李先生借款5万元,用于资金周转(13:02)"
			               		},
			               		{
			               			"text": "山东烟台衣先生借款5万元,用于购买设备(13:00)"
			               		},
			               		{
			               			"text": "河北唐山赵先生借款3万元,用于装修(12:50)"
			               		},
			               		{
			               			"text": "河北唐山王先生借款6万元,用于投资创业(12:46)"
			               		},
			               		{
			               			"text": "河北唐山高先生借款5万元,用于资金周转(12:43)"
			               		},
			               		{
			               			"text": "河北石家庄李先生借款5万元,用于扩大经营(12:41)"
			               		},
			               		{
			               			"text": "辽宁沈阳刘女士借款5万元,用于资金周转(12:38)"
			               		},
			               		{
			               			"text": "河北石家庄王先生借款4万元,用于扩大经营(12:35)"
			               		},
			               		{
			               			"text": "广东深圳郭先生借款15万元,用于个人消费(12:27)"
			               		},
			               		{
			               			"text": "江苏常州朱先生借款4万元,用于资金周转(12:26)"
			               		},
			               		{
			               			"text": "广东深圳杜女士借款4万元,用于装修(12:13)"
			               		},
			               		{
			               			"text": "广东深圳王女士借款6万元,用于扩大经营(12:11)"
			               		},
			               		{
			               			"text": "浙江杭州葛先生借款3万元,用于购车(12:10)"
			               		},
			               		{
			               			"text": "安徽合肥王女士借款6万元,用于支付货款(12:02)"
			               		},
			               		{
			               			"text": "广西壮族自治柳州何先生借款4万元,用于支付货款(12:02)"
			               		},
			               		{
			               			"text": "广东深圳陶先生借款6万元,用于扩大经营(12:00)"
			               		},
			               		{
			               			"text": "黑龙江哈尔滨刘先生借款4万元,用于扩大经营(11:58)"
			               		},
			               		{
			               			"text": "吉林长春姜先生借款3万元,用于装修(11:39)"
			               		},
			               		{
			               			"text": "安徽滁州李先生借款10万元,用于支付货款(11:31)"
			               		},
			               		{
			               			"text": "辽宁沈阳白女士借款6万元,用于扩大经营(11:05)"
			               		},
			               		{
			               			"text": "吉林长春王女士借款6万元,用于扩大经营(10:45)"
			               		},
			               		{
			               			"text": "吉林长春武先生借款5万元,用于购房(10:44)"
			               		},
			               		{
			               			"text": "吉林长春黄女士借款5万元,用于扩大经营(10:42)"
			               		},
			               		{
			               			"text": "湖北宜昌周先生借款5万元,用于扩大经营(10:30)"
			               		},
			               		{
			               			"text": "辽宁沈阳闫女士借款5万元,用于个人消费(10:25)"
			               		},
			               		{
			               			"text": "浙江杭州赵先生借款7万元,用于个人消费(10:14)"
			               		}
			               	],
			               	"todayDepartmentSignMoney": [
			               		{
			               			"money": 15,
			               			"areaname": null,
			               			"department": [
			               				{
			               					"money": 15,
			               					"departmentName": "深圳中航"
			               				}
			               			]
			               		},
			               		{
			               			"money": 121,
			               			"areaname": "区域1",
			               			"department": [
			               				{
			               					"money": 56,
			               					"departmentName": "深圳罗湖"
			               				},
			               				{
			               					"money": 28,
			               					"departmentName": "深圳福田"
			               				},
			               				{
			               					"money": 20,
			               					"departmentName": "深圳宝安"
			               				},
			               				{
			               					"money": 17,
			               					"departmentName": "深圳龙华"
			               				},
			               				{
			               					"money": 0,
			               					"departmentName": "中山东区"
			               				}
			               			]
			               		},
			               		{
			               			"money": 88,
			               			"areaname": "区域2",
			               			"department": [
			               				{
			               					"money": 24,
			               					"departmentName": "杭州上城"
			               				},
			               				{
			               					"money": 21,
			               					"departmentName": "合肥蜀山"
			               				},
			               				{
			               					"money": 18,
			               					"departmentName": "常州新北"
			               				},
			               				{
			               					"money": 15,
			               					"departmentName": "扬州邗江"
			               				},
			               				{
			               					"money": 10,
			               					"departmentName": "南京玄武"
			               				}
			               			]
			               		},
			               		{
			               			"money": 193,
			               			"areaname": "区域3",
			               			"department": [
			               				{
			               					"money": 66,
			               					"departmentName": "唐山路南"
			               				},
			               				{
			               					"money": 31,
			               					"departmentName": "烟台芝罘"
			               				},
			               				{
			               					"money": 29,
			               					"departmentName": "石家庄勒泰"
			               				},
			               				{
			               					"money": 24,
			               					"departmentName": "潍坊奎文"
			               				},
			               				{
			               					"money": 18,
			               					"departmentName": "柳州城中"
			               				},
			               				{
			               					"money": 13,
			               					"departmentName": "宜昌西陵"
			               				},
			               				{
			               					"money": 12,
			               					"departmentName": "襄阳樊城"
			               				}
			               			]
			               		},
			               		{
			               			"money": 192,
			               			"areaname": "区域4",
			               			"department": [
			               				{
			               					"money": 53,
			               					"departmentName": "长春朝阳"
			               				},
			               				{
			               					"money": 44,
			               					"departmentName": "大连中山"
			               				},
			               				{
			               					"money": 43,
			               					"departmentName": "沈阳沈河"
			               				},
			               				{
			               					"money": 31,
			               					"departmentName": "哈尔滨道里"
			               				},
			               				{
			               					"money": 21,
			               					"departmentName": "大庆萨尔图"
			               				}
			               			]
			               		}
			               	],
			               	"todayLoanMoney": 599,
			               	"todayProductSignMoney": [
			               		{
			               			"money": 225,
			               			"product": "生意e代"
			               		},
			               		{
			               			"money": 140,
			               			"product": "保单e代"
			               		},
			               		{
			               			"money": 118,
			               			"product": "优薪e代"
			               		},
			               		{
			               			"money": 77,
			               			"product": "房产e代"
			               		},
			               		{
			               			"money": 29,
			               			"product": "吉时代"
			               		},
			               		{
			               			"money": 15,
			               			"product": "月供e代"
			               		},
			               		{
			               			"money": 4,
			               			"product": "代发e代"
			               		},
			               		{
			               			"money": 0,
			               			"product": "信优e代"
			               		},
			               		{
			               			"money": 0,
			               			"product": "社保公积金贷"
			               		},
			               		{
			               			"money": 0,
			               			"product": "精英e代"
			               		},
			               		{
			               			"money": 0,
			               			"product": "高商e代"
			               		},
			               		{
			               			"money": 0,
			               			"product": "首付贷"
			               		},
			               		{
			               			"money": 0,
			               			"product": "专案贷款"
			               		}
			               	],
			               	"totalApplyTotal": 38359,
			               	"totalDepartment": 23,
			               	"totalPassTotal": 12013,
			               	"totalSignMoney": 48776,
			               	"totalSignUser": 9350
			               };
				}else{
					result = $.parseJSON(ServerObj.getAllResultData(""));
				}

				if(result){
				    //加载地图
				    //this._loadMap(result.departmentLocation);
					//今日产品签约金额
				    this._loadTodayProductSignMoney(result.todayProductSignMoney);
				    //每小时签约金额
				    this._loadHourSignMoney(result.hourSignMoney);
					//每小时申请量
				    this._loadHourApplyQuantity(result.hourApplyQuantity);
				    //每小时审批金额
				    this._loadHourApproveMoney(result.hourApproveMoney);
				    //今日营业部签约金额
				    this._loadTodayDepartmentSignMoney(result.todayDepartmentSignMoney);
				    //加载实时数据
				    this._loadRealData(result);
					//今日借款人明细信息
				    this._loadTodayBorrowerDetail(result.todayBorrowerDetail);
				}
				
			}catch(e){
				var $ed = $(".errorDialog").show();
				this.setTimeoutback(function(){
					$ed.hide();
				},null,3000);
			}
			this.setTimeoutback(this._ajax,null,this.options.refresh_interval,this);
			return result;
		},
		//初始化图形控件参数
		_initChart:function(){
			require.config({
				paths : {
					echarts : "../plugins/echarts"
				}
			});
		},
		//加载今日产品签约金额图表
		_loadTodayProductSignMoney:function(data){
			//图表数据
			var allData = data;
			//循环数据索引
			var loop = 0;
			//图表展示的时间节点个数
			var showProductCount = 6;
			var _this = this;
			//数据滚动间隔时间 15s
			var scrollTime = 15000;

			//初始化图表控件
			function _initChart(ec,data){
				var mychart = ec.init(document.getElementById("today_product_signMoney_id"));
				mychart.showLoading({
					text : "加载中...",
					effect : "spine",
					textStyle : {
						fontSize : 20
					}
				});
				var option = {
					title : {
						text : '',
						subtext : ''
					},
					tooltip : {
						show : false,
						trigger : 'axis'
					},
					legend : {
						show : false,
						data : [ '签约金额', '' ]
					},
					animation : false,
					addDataAnimation:false,
					toolbox : {
						show : false,
						feature : {
							mark : {
								show : true
							},
							dataView : {
								show : true,
								readOnly : false
							},
							magicType : {
								show : true,
								type : [ 'line', 'bar' ]
							},
							restore : {
								show : true
							},
							saveAsImage : {
								show : true
							}
						}
					},
					/*backgroundColor : '#0D0D0B',*/
					calculable : false,
					grid : {
						borderWidth : 0,
						x : 20,
						y : 40,
						x2 : 10,
						y2 : 40
					},
					xAxis : [ {
						type : 'category',
						data : data.category,
						splitLine : {
							show : false
						},
						axisLine : {
							lineStyle : {
								color : '#2699EC',
								width : 1
							},
							show : false
						},
						axisTick : {
							inside : true,
							lineStyle : {
								color : '#2699EC',
								type : 'broken',
								width : 1
							},
							show : false
						},
						axisLabel : {
							textStyle : {
								color : '#FBCF4A',
								fontSize : "12"
							},
							interval:0,
							formatter:function(value){
								var ss = value.split('');
								var rst = '';
								for(var i = 1;i<=ss.length;i++){
									rst += ss[i-1];
									if(i%4==0){
										rst += '\n';
									}
								}
								return rst;
							}
						}
					} ],
					yAxis : [ {
						type : 'value',
						show : false
					} ],
					series : [ {
						name : '签约金额',
						type : 'bar',
						barWidth : 15,
						itemStyle : {
							normal : {
								color : '#FBCF4A',
								label : {
									show : true
								},
								barBorderRadius : 0,
								label : {
									show : true,
									textStyle : {
										fontSize : 18
									}
								}
							}
						},
						data : data.data
					} ]
				};
				mychart.setOption(option);
			};

			//获取图表展示数据
			function getDataList(){
    			var category = [],sdata = [];
    			if(allData && allData.length > 0){
    				if(allData.length <= showProductCount){
    					loop = 0;
    				}
    				for(var i = loop;i<allData.length;i++){
    					category.push(allData[i].product);
    					sdata.push(allData[i].money);
    					if(category.length >= showProductCount){break;}
    				}

    				if(allData.length > showProductCount){
	    				if(category.length < showProductCount){
	    					for(var i = 0,j = category.length;i<showProductCount - j;i++){
		    					category.push(allData[i].product);
		    					sdata.push(allData[i].money);
	    					}
	    				}
	    				if(++loop >= allData.length){
	    					loop = 0;
	    				}
    				}
    			}

    			if(category.length == 0){
					category = ["生意e代", "精英e代", "优薪e代", "优发e代", "保单e代", "房产e代"];
    			}

    			if(sdata.length == 0){
					sdata = [0,0,0,0,0,0];
    			}
    			return {category:category,data:sdata};
			};

			//定时刷新图表
			function _start(ec){
				if(_this.jobs.TodayProductSignMoneyJob){
					clearTimeout(_this.jobs.TodayProductSignMoneyJob);
				}
				_initChart(ec,getDataList());
				var job = _this.setTimeoutback(_start,ec,scrollTime);
				$.extend(_this.jobs,{'TodayProductSignMoneyJob':job});
			};

			require([ "echarts", "echarts/chart/bar" ], function(ec) {
				_start(ec);
			});
		},
		//加载每小时签约金额图表
		_loadHourSignMoney:function(data){
			//图表数据-实时数据
			var allData = data && data.detail;
			//图表数据-目标
			var goal = data && data.goal;
			//循环数据索引
			var loop = 7;
			//图表展示的时间节点个数
			var showTimeCount = 7;
			var _this = this;
			//数据滚动间隔时间 20s
			var scrollTime = 20000;

			//初始化图表控件
			function _initChart(ec,data){
				var mychart = ec.init(document.getElementById("hour_signMoney_id"));
				mychart.showLoading({
					text : "加载中...",
					effect : "spine",
					textStyle : {
						fontSize : 20
					}
				});

				var option = {
					title : {
						text : '',
						subtext : ''
					},
					tooltip : {
						show : false,
						trigger : 'axis'
					},
					legend : {
						show : false,
						data : [ '最高气温' ]
					},
					animation : false,
					addDataAnimation:false,
					/*backgroundColor : '#0D0D0B',*/
					grid : {
						x : 25,
						y : 30,
						x2 : 35,
						y2 : 30,
						borderColor : '#FF0000',
						borderWidth : 0
					},
					calculable : false,
					xAxis : [ {
						type : 'category',
						boundaryGap : false,
						data : data.category,
						splitLine : {
							show : false
						},
						axisLine : {
							lineStyle : {
								color : '#2699EC',
								width : 1
							}
						},
						axisTick : {
							inside : true,
							lineStyle : {
								color : '#2699EC',
								type : 'broken',
								width : 1
							}
						},
						axisLabel : {
							textStyle : {
								color : '#2699EC',
								fontSize : "12"
							}
						}

					} ],
					yAxis : [ {
						show : false,
						type : 'value',
						boundaryGap : [ 0.01, 0.01 ],
						axisLabel : {
							formatter : '{value}'
						}
					} ],
					series : [ {
						name : '',
						type : 'line',
						data : data.data,
						//symbol:'image://../images/1.png',
						symbol : 'emptyCircle',
						symbolSize : 3,
						smooth : true,
						/**平滑曲线*/
						itemStyle : {
							normal : {
								color : '#FBCF4A',
								lineStyle : {
									width : 2
								},
								label : {
									show : true,
									textStyle : {
										fontSize : 18
									}
								}
							}
						},
						markLine : {
							symbol : ['emptyCircle','emptyCircle'],
							symbolSize:[0,3],
							large : false,
							effect : {
								show : false
							},
							clickable:false,
							itemStyle : {
								normal : {
									color : '#2799EF',
									lineStyle : {
										width : 2,
										type : 'solid'
									},
									label : {
										textStyle : {
											fontSize : 12
										}
									}
								}
							},
							data : [ [ {
								name : '标线1起点',
								value : data.goal,
								xAxis : 0,
								yAxis : data.goal
							}, {
								name : '标线1终点',
								xAxis : 9999,
								yAxis : data.goal
							} ] ]
						}
					} ]
				};
				mychart.setOption(option);
			};

			//获取图表展示数据
			function getDataList(){
    			var category = [],sdata = [];
    			if(allData && allData.length > 0){
    				if(allData.length <= showTimeCount){
    					loop = 0;
    				}
    				for(var i = loop;i<allData.length;i++){
    					category.push(allData[i].hour);
    					sdata.push(allData[i].money);
    					if(category.length >= showTimeCount){break;}
    				}

    				if(allData.length > showTimeCount){
	    				if(category.length < showTimeCount){
	    					for(var i = 0,j = category.length;i<showTimeCount - j;i++){
		    					category.push(allData[i].hour);
		    					sdata.push(allData[i].money);
	    					}
	    				}
	    				if(++loop >= allData.length){
	    					loop = 0;
	    				}
    				}
    			}

    			if(category.length == 0){
					category = ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00"];
    			}

    			if(sdata.length == 0){
    				sdata = [0,0,0,0,0,0,0];
    			}
    			return {category:category,data:sdata,goal:goal};
			};

			//定时刷新图表
			function _start(ec){
				if(_this.jobs.HourSignMoneyJob){
					clearTimeout(_this.jobs.HourSignMoneyJob);
				}
				_initChart(ec,getDataList());
				var job = _this.setTimeoutback(_start,ec,scrollTime);
				$.extend(_this.jobs,{'HourSignMoneyJob':job});

			};

			require([ "echarts", "echarts/chart/line" ], function(ec) {
				_start(ec);
			});
		},
		//加载每小时申请量图表
		_loadHourApplyQuantity:function(data){
			//图表数据-实时数据
			var allData = data && data.detail;
			//图表数据-目标
			var goal = data && data.goal;
			//循环数据索引
			var loop = 7;
			//图表展示的时间节点个数
			var showTimeCount = 7;
			var _this = this;
			//数据滚动间隔时间 20s
			var scrollTime = 20000;

			//初始化图表控件
			function _initChart(ec,data){
				var mychart = ec.init(document.getElementById("hour_applyQuantity_id"));
				mychart.showLoading({
					text : "加载中...",
					effect : "spine",
					textStyle : {
						fontSize : 20
					}
				});

				var option = {
					title : {
						text : '',
						subtext : ''
					},
					tooltip : {
						show : false,
						trigger : 'axis'
					},
					legend : {
						show : false,
						data : [ '最高气温' ]
					},
					animation : false,
					addDataAnimation:false,
					/*backgroundColor : '#0D0D0B',*/
					grid : {
						x : 25,
						y : 30,
						x2 : 35,
						y2 : 30,
						borderColor : '#FF0000',
						borderWidth : 0
					},
					calculable : false,
					xAxis : [ {
						type : 'category',
						boundaryGap : false,
						data : data.category,
						splitLine : {
							show : false
						},
						axisLine : {
							lineStyle : {
								color : '#2699EC',
								width : 1
							}
						},
						axisTick : {
							inside : true,
							lineStyle : {
								color : '#2699EC',
								type : 'broken',
								width : 1
							}
						},
						axisLabel : {
							textStyle : {
								color : '#2699EC',
								fontSize : "12"
							}
						}

					} ],
					yAxis : [ {
						show : false,
						type : 'value',
						boundaryGap : [ 0.01, 0.01 ],
						axisLabel : {
							formatter : '{value}'
						}
					} ],
					series : [ {
						name : '',
						type : 'line',
						data : data.data,
						//symbol:'image://../images/1.png',
						symbol : 'emptyCircle',
						symbolSize : 3,
						smooth : true,
						/**平滑曲线*/
						itemStyle : {
							normal : {
								color : '#FBCF4A',
								lineStyle : {
									width : 2
								},
								label : {
									show : true,
									textStyle : {
										fontSize : 18
									}
								}
							}
						},
						markLine : {
							symbol : ['emptyCircle','emptyCircle'],
							symbolSize:[0,3],
							large : false,
							effect : {
								show : false
							},
							clickable:false,
							itemStyle : {
								normal : {
									color : '#2799EF',
									lineStyle : {
										width : 2,
										type : 'solid'
									},
									label : {
										textStyle : {
											fontSize : 12
										}
									}
								}
							},
							data : [ [ {
								name : '标线1起点',
								value : data.goal,
								xAxis : 0,
								yAxis : data.goal
							}, {
								name : '标线1终点',
								xAxis : 9999,
								yAxis : data.goal
							} ] ]
						}
					} ]
				};
				mychart.setOption(option);
			};

			//获取图表展示数据
			function getDataList(){
    			var category = [],sdata = [];
    			if(allData && allData.length > 0){
    				if(allData.length <= showTimeCount){
    					loop = 0;
    				}
    				for(var i = loop;i<allData.length;i++){
    					category.push(allData[i].hour);
    					sdata.push(allData[i].count);
    					if(category.length >= showTimeCount){break;}
    				}

    				if(allData.length > showTimeCount){
	    				if(category.length < showTimeCount){
	    					for(var i = 0,j = category.length;i<showTimeCount - j;i++){
		    					category.push(allData[i].hour);
		    					sdata.push(allData[i].count);
	    					}
	    				}
	    				if(++loop >= allData.length){
	    					loop = 0;
	    				}
    				}
    			}

    			if(category.length == 0){
					category = ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00"];
    			}

    			if(sdata.length == 0){
    				sdata = [0,0,0,0,0,0,0];
    			}

    			return {category:category,data:sdata,goal:goal};
			};

			//定时刷新图表
			function _start(ec){
				if(_this.jobs.HourApplyQuantityJob){
					clearTimeout(_this.jobs.HourApplyQuantityJob);
				}
				_initChart(ec,getDataList());
				var job = _this.setTimeoutback(_start,ec,scrollTime);
				$.extend(_this.jobs,{'HourApplyQuantityJob':job});
			};

			require([ "echarts", "echarts/chart/line" ], function(ec) {
				_start(ec);
			});
		},
		//加载每小时审批金额图表
		_loadHourApproveMoney:function(data){
			//图表数据-实时数据
			var allData = data && data.detail;
			//图表数据-目标
			var goal = data && data.goal;
			//循环数据索引
			var loop = 7;
			//图表展示的时间节点个数
			var showTimeCount = 7;
			var _this = this;
			//数据滚动间隔时间 20s
			var scrollTime = 20000;

			//初始化图表控件
			function _initChart(ec,data){
				var mychart = ec.init(document.getElementById("hour_approveMoney_id"));
				mychart.showLoading({
					text : "加载中...",
					effect : "spine",
					textStyle : {
						fontSize : 20
					}
				});

				var option = {
					title : {
						text : '',
						subtext : ''
					},
					tooltip : {
						show : false,
						trigger : 'axis'
					},
					legend : {
						show : false,
						data : [ '最高气温' ]
					},
					animation : false,
					addDataAnimation:false,
					/*backgroundColor : '#0D0D0B',*/
					grid : {
						x : 25,
						y : 30,
						x2 : 35,
						y2 : 30,
						borderColor : '#FF0000',
						borderWidth : 0
					},
					calculable : false,
					xAxis : [ {
						type : 'category',
						boundaryGap : false,
						data : data.category,
						splitLine : {
							show : false
						},
						axisLine : {
							lineStyle : {
								color : '#2699EC',
								width : 1
							}
						},
						axisTick : {
							inside : true,
							lineStyle : {
								color : '#2699EC',
								type : 'broken',
								width : 1
							}
						},
						axisLabel : {
							textStyle : {
								color : '#2699EC',
								fontSize : "12"
							}
						}

					} ],
					yAxis : [ {
						show : false,
						type : 'value',
						boundaryGap : [ 0.01, 0.01 ],
						axisLabel : {
							formatter : '{value}'
						}
					} ],
					series : [ {
						name : '',
						type : 'line',
						data : data.data,
						//symbol:'image://../images/1.png',
						symbol : 'emptyCircle',
						symbolSize : 3,
						smooth : true,
						/**平滑曲线*/
						itemStyle : {
							normal : {
								color : '#FBCF4A',
								lineStyle : {
									width : 2
								},
								label : {
									show : true,
									textStyle : {
										fontSize : 18
									}
								}
							}
						},
						markLine : {
							symbol : ['emptyCircle','emptyCircle'],
							symbolSize:[0,3],
							large : false,
							effect : {
								show : false
							},
							clickable:false,
							itemStyle : {
								normal : {
									color : '#2799EF',
									lineStyle : {
										width : 2,
										type : 'solid'
									},
									label : {
										textStyle : {
											fontSize : 12
										}
									}
								}
							},
							data : [ [ {
								name : '标线1起点',
								value : data.goal,
								xAxis : 0,
								yAxis : data.goal
							}, {
								name : '标线1终点',
								xAxis : 9999,
								yAxis : data.goal
							} ] ]
						}
					} ]
				};
				mychart.setOption(option);
			};

			//获取图表展示数据
			function getDataList(){
    			var category = [],sdata = [];
    			if(allData && allData.length > 0){
    				if(allData.length <= showTimeCount){
    					loop = 0;
    				}
    				for(var i = loop;i<allData.length;i++){
    					category.push(allData[i].hour);
    					sdata.push(allData[i].money);
    					if(category.length >= showTimeCount){break;}
    				}

    				if(allData.length > showTimeCount){
	    				if(category.length < showTimeCount){
	    					for(var i = 0,j = category.length;i<showTimeCount - j;i++){
		    					category.push(allData[i].hour);
		    					sdata.push(allData[i].money);
	    					}
	    				}
	    				if(++loop >= allData.length){
	    					loop = 0;
	    				}
    				}
    			}

    			if(category.length == 0){
					category = ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00"];
    			}

    			if(sdata.length == 0){
    				sdata = [0,0,0,0,0,0,0];
    			}
    			return {category:category,data:sdata,goal:goal};
			};

			//定时刷新图表
			function _start(ec){
				if(_this.jobs.HourApproveMoneyJob){
					clearTimeout(_this.jobs.HourApproveMoneyJob);
				}
				_initChart(ec,getDataList());
				var job = _this.setTimeoutback(_start,ec,scrollTime);
				$.extend(_this.jobs,{'HourApproveMoneyJob':job});
			};

			require([ "echarts", "echarts/chart/line" ], function(ec) {
				_start(ec);
			});
		},
		//加载今日营业部签约金额图表
		_loadTodayDepartmentSignMoney:function(data){
			//图表数据
			var allData = data;
			//循环数据索引
			var loop = 0;
			//图表展示的时间节点个数
			var showDepartmentCount = 18;
			var _this = this;
			//数据滚动间隔时间 10s
			var scrollTime = 10000;

			//初始化图表控件
			function _initChart(ec,data){
				var mychart = ec.init(document.getElementById("today_department_signMoney_id"));
				mychart.showLoading({
					text : "加载中...",
					effect : "spine",
					textStyle : {
						fontSize : 20
					}
				});
				var option = {
					title : {
						text : '',
						subtext : ''
					},
					tooltip : {
						trigger : 'axis',
						show : false
					},
					legend : {
						data : [ '营业部签约金额' ],
						show : false
					},
					animation : false,
					addDataAnimation:false,
					toolbox : {
						show : false,
						feature : {
							mark : {
								show : true
							},
							dataView : {
								show : true,
								readOnly : false
							},
							magicType : {
								show : true,
								type : [ 'line', 'bar' ]
							},
							restore : {
								show : true
							},
							saveAsImage : {
								show : true
							}
						}
					},
					calculable : false,
					grid : {
						borderWidth : 0,
						x : 80,
						y : 10,
						x2 : 60,
						y2 : 10
					},
					xAxis : [ {
						type : 'value',
						show : false,
						axisLabel:{									
							interval:0
						}
					} ],
					yAxis : [ {
						type : 'category',
						data : data.category,
						splitLine : {
							show : false
						},
						axisLine : {
							show : false
						},
						axisTick : {
							show : false
						},
						axisLabel : {
							textStyle : {
								color : '#FFF'
							}
						},
						axisLabel : {
							textStyle : {
								color : '#FFF',
								fontSize : "14"
							}
						}
					} ],
					series : [ {
						name : '营业部签约金额',
						type : 'bar',
						barWidth : 15,
						data : data.data,
						itemStyle : {
							normal : {
								color : '#FBCF4A',
								label : {
									show : true
								},
								barBorderRadius : 0,
								label : {
									show : true,
									textStyle : {
										fontSize : 18
									}
								}
							}
						}
					} ]
				};
				mychart.setOption(option);
			};

			//获取图表展示数据
			function getDataList(){
    			var category = [],sdata = [];
    			var analyData = [];

    			if(allData && allData.length > 0){
    				for(var i = 0;i<allData.length;i++){
    					for(var j = 0,k = allData[i].department;j<k.length;j++){
    						analyData.push(k[j]);
    					};
    					analyData.push({departmentName:"",money:""});
    				}

    				if(analyData.length <= showDepartmentCount){
    					loop = 0;
    				}
    				for(var i = loop;i<analyData.length;i++){
    					category.unshift(analyData[i].departmentName);
    					sdata.unshift(analyData[i].money);
    					if(category.length >= showDepartmentCount){break;}
    				}

    				if(analyData.length > showDepartmentCount){
	    				if(category.length < showDepartmentCount){
	    					for(var i = 0,j = category.length;i<showDepartmentCount - j;i++){
		    					category.unshift(analyData[i].departmentName);
		    					sdata.unshift(analyData[i].money);
	    					}
	    				}
	    				if(++loop >= analyData.length){
	    					loop = 0;
	    				}
    				}
    			}

    			if(category.length == 0){
					category = [
					"常州", "合肥", "沈阳", "柳州", "石家庄", "唐山", "大连", "烟台", "中山", "罗湖", "福田", "哈尔滨"];
    			}

    			if(sdata.length == 0){
					sdata = [0,0,0,0,0,0,0,0,0,0,0,0];
    			}
    			return {category:category,data:sdata};
			};

			//定时刷新图表
			function _start(ec){
				if(_this.jobs.TodayDepartmentSignMoneyJob){
					clearTimeout(_this.jobs.TodayDepartmentSignMoneyJob);
				}
				_initChart(ec,getDataList());
				var job = _this.setTimeoutback(_start,ec,scrollTime);
				$.extend(_this.jobs,{'TodayDepartmentSignMoneyJob':job});
			};

			require([ "echarts", "echarts/chart/bar" ], function(ec) {
				_start(ec);
			});
		},
		//加载地图
		_loadMap:function(data){
			require([ "echarts", "echarts/chart/map" ], function(ec) {
				var mychart = ec.init(document.getElementById("map_id"));

				mychart.showLoading({
					text : "加载中...",
					effect : "spine",
					textStyle : {
						fontSize : 20
					}
				});

				var placeList = [];
				if(data && data.length > 0){
					for(var i = 0;i<data.length;i++){
						var obj = data[i];
						placeList.push({
							name:obj.name,
							geoCoord : [ obj.longitude,obj.latitude ]
						});
					}
				}

				var option = {
					//backgroundColor : '#1b1b1b',
					color : [ 'rgba(255, 0, 0, 1)' ],
					title : {
						text : '',
						subtext : '',
						x : 'center',
						textStyle : {
							color : '#fff'
						}
					},
					animation : false,
					legend : {
						show : false,
						orient : 'vertical',
						x : 'left',
						data : [ '网点' ],
						textStyle : {
							color : '#fff'
						}
					},
					toolbox : {
						show : false,
						orient : 'vertical',
						x : 'right',
						y : 'center',
						feature : {
							mark : {
								show : true
							},
							dataView : {
								show : true,
								readOnly : false
							},
							restore : {
								show : true
							},
							saveAsImage : {
								show : true
							}
						}
					},
					series : [ {
						name : '网点',
						type : 'map',
						mapType : 'china',
						itemStyle : {
							normal : {
								borderColor : 'rgba(100,149,237,1)',
								borderWidth : 1.5,
								areaStyle : {
									color : '#1b1b1b'
								}
							}
						},
						hoverable : false,
						roam : true,
						data : [],
						markPoint : {
							symbolSize : 2,
							symbol : "circle",
							large : false,
							effect : {
								show : false
							},
							data : placeList
						}
					} ]
				};

				loadingTicket = setTimeout(function() {
					mychart.setOption(option);
					mychart.hideLoading();
				}, 1);

			});
		},
		//加载累计签约总额(万)、累计签约客户数、累计申请总数、累计通过总数、今日总放款、本月总放款
		_loadRealData:function(data){
			$(".totalDepartmentTitle label").html(data.totalDepartment);
			$(".totalSignMoney span").html("￥"+data.totalSignMoney);
			$(".totalSignUser span").html(data.totalSignUser);
			$(".totalApplyTotal span").html(data.totalApplyTotal);
			$(".totalPassTotal span").html(data.totalPassTotal);
			$(".todayLoanMoney span").html("￥"+data.todayLoanMoney);
			$(".monthLoanMoney span").html("￥"+data.monthLoanMoney);
		},
		//加载今日借款明细
		_loadTodayBorrowerDetail:function(data){
			if(data && data.length > 0){
				var _tbd = $(".todayBorrowerDetail");
				var rst = "<div class='todayBorrowerDetailWrap'>";
				$(data).each(function(){
					rst += "<label>"+this.text+"</label>";
				});
				rst+="</div>";
				_tbd.html(rst);
				//_tbd.marquee({interval:400});
				
				/*if(_tbd.children().height() > _tbd.height()){
    				var idx = 1;
    				setInterval(function(){
    					_tbd.children().css({top:-_tbd.height() * idx++ - 5});
    					if(idx >= Math.ceil(_tbd.children().height()/_tbd.height())){
    						idx = 0;
    					}
    				},20000);
				}*/
			}
		},
		setTimeoutback:function(callback,args,time,_this){
			return setTimeout(function(){
				callback.call(_this||window,args);
			},time);
		},
		randomValue:function(scalar){
			return Math.round(Math.random(1)*scalar)
		}
    };
    
    var tv = new tv({});
});


/** 时间显示 **/
function showLocale(objD)   
{   
    var str,colorhead = "",colorfoot = "";   
    var yy = objD.getYear();   
        if(yy<1900) yy = yy+1900;   
    var MM = objD.getMonth()+1;   
        if(MM<10) MM = '0' + MM;   
    var dd = objD.getDate();   
        if(dd<10) dd = '0' + dd;   
    var hh = objD.getHours();   
        if(hh<10) hh = '0' + hh;   
    var mm = objD.getMinutes();   
        if(mm<10) mm = '0' + mm;   
    var ss = objD.getSeconds();   
        if(ss<10) ss = '0' + ss;   
    var ww = objD.getDay();   
    //if ( ww==0 ) colorhead="<font color=\"#FF0000\">";   
    //if ( ww > 0 && ww < 6 ) colorhead="<font color=\"#373737\">";   
    //if ( ww==6 ) colorhead="<font color=\"#008000\">";   
    if (ww==0) ww="星期日";   
    if (ww==1) ww="星期一";   
    if (ww==2) ww="星期二";   
    if (ww==3) ww="星期三";   
    if (ww==4) ww="星期四";   
    if (ww==5) ww="星期五";   
    if (ww==6) ww="星期六";   
    //colorfoot="</font>"  
	str = colorhead + yy + "年" + MM + "月" + dd + "日&nbsp;&nbsp;" + hh + ":" + mm + ":" + ss + "&nbsp;&nbsp;" + ww + colorfoot;   
    return(str);   
}  

function tick()   
{   
    var today;   
    today = new Date();
    $(".top-time").html(showLocale(today));
    window.setTimeout("tick()", 1000);   
}   
tick();
/** end 时间显示 **/