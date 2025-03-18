Object.assign(muban.首图2.二级, {
    "tabs": ".nav-tabs&&li",
});
var rule = {
  title: '金金虫',
  模板: '自动',
  host: 'https://www.jinjinchong.com',
  url:'/vodshow/fyclass--------fypage---.html',//网站的分类页面链接
  searchUrl:'/vodsearch/**----------fypage---.html',
  cate_exclude:'福利|专题',
  //class_parse: '.nav .nav-menu-items li;a&&title;a&&href;/vodtype/(\\d+)*',
  //推荐: '.cbox_list:gt(-1):lt(4);*;*;*;*;*',
  //一级: 'ul.vodlist li;a&&title;.vodlist_thumb&&data-original;.pic_text&&Text;a&&href',

    搜索: '.stui-vodlist__media li;h3 a&&Text;.thumb a&&data-original;.thumb .pic-text&&Text;.thumb a&&href;p.hl-lc-2&&Text',
}