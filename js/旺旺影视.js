var rule = {
    类型: '影视',
    title: '旺旺影视',
    host: 'https://www.wwgz.cn',
    url: '/vod-type-id-fyclass-pg-fypage.html',
    searchUrl: '/vod-search-pg-fypage-wd-**.html',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    timeout: 5000,
    class_parse: '.swiper-wrapper li;a&&Text;a&&href;/vod-type-id-(\\d+)-.*.html',
    cate_exclude: '',
    play_parse: true,
    lazy: $js.toString(() => {
        input = {
            parse: 1,
            url: input,
            js: 'document.querySelector("#playleft iframe").contentWindow.document.querySelector("#player").click()',
        }
    }),
    double: true,
    推荐: '.globalPicList;.resize_list;.sTit&&Text;img&&src;.sBottom span--em&&Text;a&&href;.sDes&&Text',
    一级: '.resize_list;.sTit&&Text;img&&src;.sBottom span--em&&Text;a&&href;.sDes&&Text',
    二级: {
        title: 'h1 a&&title;.desc_item:eq(0)--span&&Text',
        img: 'img&&src',
        desc: ';.desc_item:eq(4)--span&&Text;.type-title&&Text;.desc_item:eq(1)--span&&Text;.desc_item:eq(2)--span&&Text',
        content: '.detail-con--span&&Text',
        tabs: '.numlistBox .hd a',
        lists: '.numList:eq(#id)&&a',
        tab_text: 'body&&Text',
        list_text: 'body&&Text',
        list_url: 'a&&href',
        list_url_prefix: '',
    },
    搜索: '.ulPicTxt li;.sTit&&Text;img&&src;.sStyle&&Text;a&&href;.sDes:eq(1)--em&&Text',
}