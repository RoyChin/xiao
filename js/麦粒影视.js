var rule = {
    模板: '自动',
    title:'麦粒影视',
    host: 'https://www.maili.icu',
    url:'/vodshow/fyclass--------fypage---.html',//网站的分类页面链接
    searchUrl:'/vodsearch/**----------fypage---.html',
    class_parse: 'div.nav ul.nav-menu-items&&li;a&&Text;a&&href;.*/(.*?).html',
    cate_exclude:'体育赛事|全部影片',
    一级: '.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;a.module-item-title&&href',
    搜索: '.module-items .module-search-item;a.video-serial&&title;img&&data-src;.video-serial&&Text;a.video-serial&&href',
}