// 发布页 https://www.bdys.me/
var rule = {
    title: '哔嘀影视',
     host:'https://www.yjys.top',
     //hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});HOST = html.match(/可用网址：<a href=\'(.*)\'>点此进入/)[1];print("哔嘀跳转地址 =====> " + HOST)',
    // url: '/s/all/fypage?type=fyclass',
	//url: '/s/all/fypage?type=fyclassfyfilter',
    //url:'/s/{{fl.lx}}/fypage?type=fyclass&{{fl.area}}&{{fl.year}}&{{fl.by}}[/s/all/fypage?type=fyclassfyfilter]'
    url:'/s/all/fypage?type=fyclass[/s/fyfilter]',
	filter_url:'{{fl.lx}}/fypage?type=fyclass&{{fl.area}}&{{fl.year}}&{{fl.by}}',
	filter: {"0":[{"key":"lx","name":"类型","value":[{"n":"不限","v":"all"},{"n":"动作","v":"dongzuo"},{"n":"爱情","v":"aiqing"},{"n":"喜剧","v":"xiju"},{"n":"科幻","v":"kehuan"},{"n":"恐怖","v":"kongbu"},{"n":"战争","v":"zhanzheng"},{"n":"武侠","v":"wuxia"},{"n":"魔幻","v":"mohuan"},{"n":"剧情","v":"juqing"},{"n":"动画","v":"donghua"},{"n":"惊悚","v":"jingsong"},{"n":"3D","v":"3D"},{"n":"灾难","v":"zainan"},{"n":"悬疑","v":"xuanyi"},{"n":"警匪","v":"jingfei"},{"n":"文艺","v":"wenyi"},{"n":"青春","v":"qingchun"},{"n":"冒险","v":"maoxian"},{"n":"犯罪","v":"fanzui"},{"n":"纪录","v":"jilu"},{"n":"古装","v":"guzhuang"},{"n":"奇幻","v":"qihuan"},{"n":"国语","v":"guoyu"},{"n":"综艺","v":"zongyi"},{"n":"历史","v":"lishi"},{"n":"运动","v":"yundong"},{"n":"原创压制","v":"yuanchuang"},{"n":"美剧","v":"meiju"},{"n":"韩剧","v":"hanju"},{"n":"国产电视剧","v":"guoju"},{"n":"日剧","v":"riju"},{"n":"英剧","v":"yingju"},{"n":"德剧","v":"deju"},{"n":"俄剧","v":"eju"},{"n":"巴剧","v":"baju"},{"n":"加剧","v":"jiaju"},{"n":"西剧","v":"spanish"},{"n":"意大利剧","v":"yidaliju"},{"n":"泰剧","v":"taiju"},{"n":"港台剧","v":"gangtaiju"},{"n":"法剧","v":"faju"},{"n":"澳剧","v":"aoju"}]},{"key":"area","name":"地区","value":[{"n":"不限","v":""},{"n":"中国大陆","v":"area=中国大陆"},{"n":"中国香港","v":"area=中国香港"},{"n":"中国台湾","v":"area=中国台湾"},{"n":"美国","v":"area=美国"},{"n":"英国","v":"area=英国"},{"n":"日本","v":"area=日本"},{"n":"韩国","v":"area=韩国"},{"n":"法国","v":"area=法国"},{"n":"印度","v":"area=印度"},{"n":"德国","v":"area=德国"},{"n":"西班牙","v":"area=西班牙"},{"n":"意大利","v":"area=意大利"},{"n":"澳大利亚","v":"area=澳大利亚"},{"n":"比利时","v":"area=比利时"},{"n":"瑞典","v":"area=瑞典"},{"n":"荷兰","v":"area=荷兰"},{"n":"丹麦","v":"area=丹麦"},{"n":"加拿大","v":"area=加拿大"},{"n":"俄罗斯","v":"area=俄罗斯"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"year=2024"},{"n":"2023","v":"year=2023"},{"n":"2022","v":"year=2022"},{"n":"2021","v":"year=2021"},{"n":"2020","v":"year=2020"},{"n":"2019","v":"year=2019"},{"n":"2018","v":"year=2018"},{"n":"2017","v":"year=2017"},{"n":"2016","v":"year=2016"},{"n":"2015","v":"year=2015"},{"n":"2014","v":"year=2014"},{"n":"2013","v":"year=2013"},{"n":"2012","v":"year=2012"},{"n":"2011","v":"year=2011"},{"n":"2010","v":"year=2010"},{"n":"2009","v":"year=2009"},{"n":"2008","v":"year=2008"},{"n":"2007","v":"year=2007"},{"n":"2006","v":"year=2006"},{"n":"2005","v":"year=2005"},{"n":"2004","v":"year=2004"},{"n":"2003","v":"year=2003"},{"n":"2002","v":"year=2002"},{"n":"2001","v":"year=2001"},{"n":"2000","v":"year=2000"}]},{"key":"by","name":"排序","value":[{"n":"更新时间","v":"order=0"},{"n":"豆瓣评分","v":"order=1"}]}],"1":[{"key":"lx","name":"类型","value":[{"n":"不限","v":"all"},{"n":"动作","v":"dongzuo"},{"n":"爱情","v":"aiqing"},{"n":"喜剧","v":"xiju"},{"n":"科幻","v":"kehuan"},{"n":"恐怖","v":"kongbu"},{"n":"战争","v":"zhanzheng"},{"n":"武侠","v":"wuxia"},{"n":"魔幻","v":"mohuan"},{"n":"剧情","v":"juqing"},{"n":"动画","v":"donghua"},{"n":"惊悚","v":"jingsong"},{"n":"3D","v":"3D"},{"n":"灾难","v":"zainan"},{"n":"悬疑","v":"xuanyi"},{"n":"警匪","v":"jingfei"},{"n":"文艺","v":"wenyi"},{"n":"青春","v":"qingchun"},{"n":"冒险","v":"maoxian"},{"n":"犯罪","v":"fanzui"},{"n":"纪录","v":"jilu"},{"n":"古装","v":"guzhuang"},{"n":"奇幻","v":"qihuan"},{"n":"国语","v":"guoyu"},{"n":"综艺","v":"zongyi"},{"n":"历史","v":"lishi"},{"n":"运动","v":"yundong"},{"n":"原创压制","v":"yuanchuang"},{"n":"美剧","v":"meiju"},{"n":"韩剧","v":"hanju"},{"n":"国产电视剧","v":"guoju"},{"n":"日剧","v":"riju"},{"n":"英剧","v":"yingju"},{"n":"德剧","v":"deju"},{"n":"俄剧","v":"eju"},{"n":"巴剧","v":"baju"},{"n":"加剧","v":"jiaju"},{"n":"西剧","v":"spanish"},{"n":"意大利剧","v":"yidaliju"},{"n":"泰剧","v":"taiju"},{"n":"港台剧","v":"gangtaiju"},{"n":"法剧","v":"faju"},{"n":"澳剧","v":"aoju"}]},{"key":"area","name":"地区","value":[{"n":"不限","v":""},{"n":"中国大陆","v":"area=中国大陆"},{"n":"中国香港","v":"area=中国香港"},{"n":"中国台湾","v":"area=中国台湾"},{"n":"美国","v":"area=美国"},{"n":"英国","v":"area=英国"},{"n":"日本","v":"area=日本"},{"n":"韩国","v":"area=韩国"},{"n":"法国","v":"area=法国"},{"n":"印度","v":"area=印度"},{"n":"德国","v":"area=德国"},{"n":"西班牙","v":"area=西班牙"},{"n":"意大利","v":"area=意大利"},{"n":"澳大利亚","v":"area=澳大利亚"},{"n":"比利时","v":"area=比利时"},{"n":"瑞典","v":"area=瑞典"},{"n":"荷兰","v":"area=荷兰"},{"n":"丹麦","v":"area=丹麦"},{"n":"加拿大","v":"area=加拿大"},{"n":"俄罗斯","v":"area=俄罗斯"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"year=2024"},{"n":"2023","v":"year=2023"},{"n":"2022","v":"year=2022"},{"n":"2021","v":"year=2021"},{"n":"2020","v":"year=2020"},{"n":"2019","v":"year=2019"},{"n":"2018","v":"year=2018"},{"n":"2017","v":"year=2017"},{"n":"2016","v":"year=2016"},{"n":"2015","v":"year=2015"},{"n":"2014","v":"year=2014"},{"n":"2013","v":"year=2013"},{"n":"2012","v":"year=2012"},{"n":"2011","v":"year=2011"},{"n":"2010","v":"year=2010"},{"n":"2009","v":"year=2009"},{"n":"2008","v":"year=2008"},{"n":"2007","v":"year=2007"},{"n":"2006","v":"year=2006"},{"n":"2005","v":"year=2005"},{"n":"2004","v":"year=2004"},{"n":"2003","v":"year=2003"},{"n":"2002","v":"year=2002"},{"n":"2001","v":"year=2001"},{"n":"2000","v":"year=2000"}]},{"key":"by","name":"排序","value":[{"n":"更新时间","v":"order=0"},{"n":"豆瓣评分","v":"order=1"}]}]},
	filterable:1,//是否启用分类筛选,
    class_name: '电影&电视剧',
    class_url: '0&1',
    searchUrl: '/search/**/fypage',
    searchable: 2,//是否启用全局搜索,
    quickSearch: 0,//是否启用快速搜索,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    play_parse: true,
    lazy: '',
    limit: 6,
    double: true, // 推荐内容是否双层定位
    推荐:'.row-cards;.card-link;*;img&&data-src;*;*',
    一级:'.row-cards&&.card-link;h3&&Text;img&&src;p&&Text;a&&href',
    二级:{
    	"title":"h2&&Text;.mt-1&&Text",
    	"img":".col-md-auto img&&src",
    	"desc":";;;.mb-md-2:eq(3)&&Text;.mb-md-2:eq(1)&&Text",
    	"content":"#synopsis .card-body&&Text",
    	"tabs":".card-header:eq(1) h3",
    	"lists":"#play-list:eq(#id) a"
	},
    搜索:'.row-cards .row-0;.d-inline-block&&title;img&&src;.d-inline-block&&Text;a&&href',
}