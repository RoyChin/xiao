var rule = {
    title:'麦粒影视',
    host: 'https://www.maili.icu',
    url:'/vodshow/fyclass--------fypage---.html',//网站的分类页面链接
    searchUrl:'/vodsearch/**----------fypage---.html',
    class_parse: 'div.swiper-wrapper a;a&&Text;a&&href;/.*/(\\d+).html',
    cate_exclude:'体育赛事|全部影片',
    推荐: '.vod-list ul li;.pic a&&title;div.img-wrapper&&data-original;.text-overflow&&Text;.pic a&&href',
    搜索: '*',    
    一级: '.vod-list ul.row li;.pic a&&title;div.img-wrapper&&data-original;.text-overflow&&Text;.pic a&&href',
  二级: {
    title: '.info h3&&Text;.text-overflow:eq(0)&&Text',
    img: '.pic img&&data-original',
    desc: ';.text-overflow:eq(2)&&Text;;;',
    content: '.info div&&Text',
    tabs: 'ul.swiper-wrapper li',
    lists: 'ul.row:eq(#id) a',
  },
    play_parse: true,
  lazy: "js:\n  let html = request(input);\n  let hconf = html.match(/r player_.*?=(.*?)</)[1];\n  let json = JSON5.parse(hconf);\n  let url = json.url;\n  if (json.encrypt == '1') {\n    url = unescape(url);\n  } else if (json.encrypt == '2') {\n    url = unescape(base64Decode(url));\n  }\n  if (/\\.(m3u8|mp4|m4a|mp3)/.test(url)) {\n    input = {\n      parse: 0,\n      jx: 0,\n      url: url,\n    };\n  } else {\n    input = url && url.startsWith('http') && tellIsJx(url) ? {parse:0,jx:1,url:url}:input;\n  }",
  limit: 6,
}