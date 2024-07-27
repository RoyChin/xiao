var rule = {
  title: 'VS影院',
  host: 'https://www.nxgqmy.com',
  url: '/ybsitp/fyclass-fypage.html',
  searchUrl: '/ybsisc/**----------fypage---.html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  class_parse: 'ul.menu li:gt(0);a&&Text;a&&href;/.*/(\\d+).*',
  play_parse: true,
  lazy:`js:
  let html = request(input);
  let hconf = html.match(/r player_.*?=(.*?)</)[1];
  let json = JSON5.parse(hconf);
  let url = json.url;
  if (json.encrypt == '1') {
    url = unescape(url);
  } else if (json.encrypt == '2') {
    url = unescape(base64Decode(url));
  }

 if (url.includes('master\.m3u8')) {
     url = request('https://jiexi.ddmz6.com/api/publicApi.php?url=' + url + '&code=vip').match(/r url = '(.+?)'/)[1];
      input = {
      parse: 0,
      jx: 0,
      url: url,
    };
    }
else if (/\\.(m3u8|mp4|m4a|mp3)/.test(url)) {
    input = {
      parse: 0,
      jx: 0,
      url: url,
    };
  } else {
    input = url && url.startsWith('http') && tellIsJx(url) ? {parse:0,jx:1,url:url}:input;
  }`,
  limit: 6,
  double: true,
  //tab_remove:['秒播'],
  推荐: 'ul.myui-vodlist.clearfix;li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
  一级: '.myui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
  二级: {
    title: 'h3&&Text;span.pic-text&&Text',
    img: 'div.ds-top-info-main-cover&&style',
    desc: '',
    content: 'meta[name=\'description\']&&content',
    tabs: '.myui-panel__head&&li',
    lists: '.myui-content__list:eq(#id) li a.btn',
  },
  搜索: '*',
}