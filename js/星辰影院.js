var rule = {
    模板: '自动',
    title:'星辰影院',
    host: 'https://tv.vjiangyin.com',
    url:'/vodshow/fyclass--------fypage---.html',//网站的分类页面链接
    class_parse: '.drop-content-items&&li;a&&Text;a&&href;.*/(.*?).html',
    cate_exclude:'体育赛事|全部影片',
    一级: '.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;.module-item-titlebox a&&href',
}