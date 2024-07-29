var rule = {
    模板: 'mx',
    title: '火狐影视',
    host: 'https://www.huohutv.net',
    url: '/vod-show-id-fyclass-page-fypage.html',
    searchUrl: '/vod-search-page-fypage-wd-**.html',
    class_parse: '.top_nav li;a&&Text;a&&href;/.*?(\\d*).html',
    图片来源: '@Referer=https://www.huohutv.net/',
        二级: {
      title: 'h2&&Text;.content_detail:eq(1)&&li&&a:eq(2)&&Text',
      img: '.vodlist_thumb&&data-original',
      desc: '.content_detail:eq(1)&&li:eq(1)&&Text;.content_detail:eq(1)&&li&&a&&Text;.content_detail:eq(1)&&li&&a:eq(1)&&Text;.content_detail:eq(1)&&li:eq(2)&&Text;.content_detail:eq(1)&&li:eq(3)&&Text',
      content: '.content_desc&&span&&Text',
      tabs: '.play_source_tab&&a--i',
      lists: '.content_playlist:eq(#id) li',
    },
}