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

    搜索: '.module-items .module-search-item;h3 a&&title;img&&data-src;.video-serial&&Text;a&&href',
}