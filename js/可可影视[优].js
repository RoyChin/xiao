var rule = {
    title: '可可影视[优]',
    host: 'https://www.keke8.app',
    //host: 'https://www.kkys01.com',
    url: '/show/fyclass-----2-fypage.html',
    //url: '/show/fyclass-fyfilter-fypage.html',
    searchUrl: '/search',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    class_parse: '#nav-swiper&&.nav-swiper-slide;a&&Text;a&&href;/(\\w+).html',
    cate_exclude: 'Netflix|今日更新|专题列表|排行榜',
    tab_exclude:'可可影视提供',
    tab_order: ['超清', '蓝光', '极速蓝光'],
    tab_remove:['4K(高峰不卡)'],
    play_parse: true,
	    lazy: $js.toString(() => {
        input = {
            parse: 1,
            url: input,
            js: 'document.querySelector("#my-video video").click()',
        }
    }),
    limit: 20,
    推荐: '.section-box:eq(2)&&.module-box-inner&&.module-item;*;*;*;*',
    double: false,
    一级: '.module-box-inner&&.module-item;.v-item-title:not([style])&&Text;img:last-of-type&&data-original;.v-item-bottom&&span&&Text;a&&href',
    二级: {
        title: '.detail-pic&&img&&alt;.detail-tags&&a&&Text',
        img: '.detail-pic&&img&&data-original',
        desc: '.detail-info-row-main:eq(-2)&&Text;.detail-tags&&a&&Text;.detail-tags&&a:eq(1)&&Text;.detail-info-row-main:eq(1)&&Text;.detail-info-row-main&&Text',
        content: '.detail-desc&&Text',
        tabs: '.source-item-label',
        //tabs: 'body&&.source-item-label[id]',
        lists: '.episode-list:eq(#id) a',
    },
    预处理: $js.toString(() => {
        let html = request(rule.host);
        let scripts = pdfa(html, 'script');
        let img_script = scripts.find(it => pdfh(it, 'script&&src').includes('rdul.js'));
        if (img_script) {
            let img_url = img_script.match(/src="(.*?)"/)[1];
            //console.log(img_url);
            let img_html = request(img_url);
            let img_host = img_html.match(/'(.*?)'/)[1];
            log(img_host);
            rule.图片替换 = rule.host + '=>' + img_host;
        }
    }),
    //搜索: '.search-result-list&&a;.title&&Text;.lazyload:not([id])&&data-original;.search-result-item-header&&Text;a&&href;.desc&&Text',
    搜索: $js.toString(() => {
    let cookie = getItem(RULE_CK,'');
    // let cookie = '';
    log('储存的cookie:'+cookie);
    pdfh = jsp.pdfh;
    let htmlsearch = request(input);
    let t = pdfh(htmlsearch, 'input[name="t"]&&value');

    let hhtml=request(input + "?k=" + KEY + "&page=" + MY_PAGE + "&t="+ t,{withHeaders:true,headers:{Cookie:cookie}});
    let json = JSON.parse(hhtml);
    let html = json.body;
    let setCk = Object.keys(json).find(it=>it.toLowerCase()==='set-cookie');
    cookie = setCk ? json[setCk] : cookie;
    // 处理多个set-Cookie的情况
    if (Array.isArray(cookie)) {
        cookie = cookie.join(';');
    }
    cookie = cookie.split(';')[0];
    log('set-cookie:'+cookie);

    VODS = [];
    let lis=pdfa(html,'.search-result-list&&a');//列表
    log(lis.length);
    lis.forEach(function(it){
        VODS.push({
            vod_id: pdfh(it,'a&&href'),//链接                  
            vod_name: pdfh(it,'.title&&Text'),//标题            
            vod_pic: pdfh(it,'.lazyload:not([id])&&data-original'),//图片
            vod_remarks: pdfh(it,'.search-result-item-header&&Text'),//描述      
        });
    });
    }),    
    
}