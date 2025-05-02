var rule = {
    title:'麦粒影视',
    host: 'https://www.maili.icu',
    url:'/vodshow/fyclass--------fypage---.html',//网站的分类页面链接
    searchUrl:'/vodsearch/**----------fypage---.html',
    class_parse: 'div.swiper-wrapper a;a&&Text;a&&href;/.*/(\\d+).html',
	//class_name: '电影&电视剧&动漫',
    //class_url: '1&2&4',
    cate_exclude:'体育赛事|全部影片|小视频',
    推荐: '.vod-list ul li;.pic a&&title;div.img-wrapper&&data-original;.text-overflow&&Text;.pic a&&href',
    搜索: '*',    
    一级: '.vod-list ul.row li;.pic a&&title;div.img-wrapper&&data-original;.text-overflow&&Text;.pic a&&href',
  二级: {
    title: '.info h3&&Text;.text-overflow:eq(0)&&Text',
    img: '.pic img&&data-original',
    desc: ';.text-overflow:eq(2)&&Text;;;',
    content: '.info div1&&Text',
    tabs: 'ul.swiper-wrapper li',
    lists: 'ul.row:eq(#id) a',
  },
    play_parse: true,
    lazy:muban.mxpro.lazy,
  limit: 6,
}