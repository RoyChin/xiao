var rule = {
    title:'兄弟影视',
    模板:'mxpro',
    host:'https://www.brovod.com',
  url: '/show/fyclass--------fypage---/',
  searchUrl: '/ss/**----------fypage---/',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  class_parse: '.navbar-items&&li;a&&title;a&&href;.*/(\\d+)/',
  tab_exclude:'排序',
  play_parse: true,
lazy: `js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);var url=html.url;if(html.encrypt=='1'){url=unescape(url)}else if(html.encrypt=='2'){url=unescape(base64Decode(url))}if((/m3u8|mp4/.test(url))&&!url.includes('xdad.m3u8')){input=url}else{input}`,
     sniffer:1,

     isVideo:`js:
    log(input);
    }if((/m3u8|mp4/.test(input))&&!input.includes('xdad.m3u8')){
    input = true
    }else{
    input = false
    }
    `,
  limit: 6,
  推荐: '.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
  double: true,
  一级: 'body a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
  二级: {
    title: 'h1&&Text;.module-info-tag&&Text',
    img: '.lazyload&&data-original',
    desc: '.module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text',
    content: '.module-info-introduction&&Text',
    tabs: '.module-tab-item',
    lists: '.module-play-list:eq(#id) a',
  },
  搜索: 'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
}