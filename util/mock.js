import Mock from 'mockjs';
// mockjs会拦截对应的请求地址，返回你配置的数据

// 首页轮播图数据
let lunboJson = [{
			src:'/static/imgs/banner/01.jpg',
			url: 'javascript:;'
		},{
			src:'/static/imgs/banner/02.jpg',
			url: 'javascript:;'
		},{
			src:'/static/imgs/banner/03.jpg',
			url: 'javascript:;'
		}];
const lunboData = Mock.mock({
	'bannerSrc|1-1': lunboJson
});

// 新闻列表数据
let newsListJson = [];
for(let i=0;i<20;i++){
	newsListJson.push({
		title: Mock.Random.cparagraph(20,50),
		src: '/static/imgs/newsList/0'+Mock.Random.integer(1,3)+'.jpg',
		clickNum: Mock.Random.integer(10,10000),
		date: Mock.Random.date('yyyy-MM-dd'),
		newsId: Mock.Random.natural(10000,99999)
	})
}

// 新闻详情
let fenleiArr = ['金融经济','体育新闻','今日头条','军事新闻','世界新闻'];
let newsDetailJson = {
	title: Mock.Random.cparagraph(1),
	fenlei: Mock.mock({'name|1': fenleiArr}).name,
	clickNum: Mock.Random.integer(10,10000),
	date: Mock.Random.date('yyyy-MM-dd'),
	content: Mock.Random.cparagraph(10,20),
};

// 酒店服务
//这部分还没头绪

//
export default [
	Mock.mock('/lunbo',lunboData), // 轮播图数据
	Mock.mock('/newslist',newsListJson), // 新闻列表数据
	Mock.mock('/newsDetail',newsDetailJson), // 新闻详情数据
];
