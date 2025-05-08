function verifyLogin() {
    let cnt = 0;
    let cookie = '';
    let r = Math.random();
    let yzm_url = 'https://www.maili.icu/index.php/verify/index.html';
    log(`验证码链接:${yzm_url}`);
    let submit_url = 'https://www.maili.icu/index.php/ajax/verify_check';
    log(`post登录链接:${submit_url}`);
    while (cnt < OCR_RETRY) {
        try {
            let {cookie, html} = reqCookie(yzm_url + '?r=' + r, {toBase64: true});
            let code = OcrApi.classification(html);
            log(`第${cnt + 1}次验证码识别结果:${code}`);
            html = post(submit_url, {
                headers: {Cookie: cookie},
                body: 'type=show&verify=' + code,
            });
            html = JSON.parse(html);
            
            if (html.code === 1) {
                log(`第${cnt + 1}次验证码提交成功`);
                log(cookie);
                return cookie // 需要返回cookie
            } else if (html.code !== 1 && cnt + 1 >= OCR_RETRY) {
                cookie = ''; // 需要清空返回cookie
            }
        } catch (e) {
            log(`第${cnt + 1}次验证码提交失败:${e.message}`);
            if (cnt + 1 >= OCR_RETRY) {
                cookie = '';
            }
        }
        cnt += 1
    }
    return cookie
}

globalThis.verifyLogin = verifyLogin;

var rule = {
    title:'麦粒影视',
    host: 'https://www.maili.icu',
    url:'/vodshow/fyclass--------fypage---.html',//网站的分类页面链接
    searchUrl:'/vodsearch/**----------fypage---.html',
    class_parse: '.stui-header__menu li;a&&Text;a&&href;/.*/(\\d+).html',
	//class_name: '电影&电视剧&动漫',
    //class_url: '1&2&4',
    cate_exclude:'体育赛事|全部影片|小视频',
    推荐: '.stui-vodlist li;.text-overflow&&Text;a.lazyload&&data-original;.pic-text&&Text;.text-overflow a&&href',
    搜索: '.stui-vodlist__media li;.thumb a&&title;.thumb a&&data-original;.pic-text&&Text;.thumb a&&href',    
    一级二: '.stui-vodlist li;.text-overflow&&Text;a.lazyload&&data-original;.pic-text&&Text;.text-overflow a&&href',
	一级: $js.toString(() => {
         let cookie = getItem(RULE_CK, '');
        log('储存的cookie:' + cookie);
        let ret = request(MY_URL, {
            headers: {
                Referer: encodeUrl(MY_URL),
                Cookie: cookie,
            }
        });
        if (/系统安全验证/.test(ret)) {
            log(ret);
            cookie = verifyLogin();
            if (cookie) {
                log(`本次成功过验证,cookie:${cookie}`);
                setItem(RULE_CK, cookie);
            } else {
                log(`本次验证失败,cookie:${cookie}`);
            }
            ret = request(MY_URL, {
                headers: {
                    Referer: encodeUrl(MY_URL),
                    Cookie: cookie,
                }
            });
        }
//log(ret);
        let d = [];
        let p = rule.一级二.split(';');
        let arr = pdfa(ret, p[0]);//列表
        arr.forEach(it => {
            d.push({
                title: pdfh(it, p[1]),//标题
                pic_url: pdfh(it, p[2]),//图片
                desc: pdfh(it, p[3]),//描述
                url: pdfh(it, p[4]),//链接
                
            });

        });
        setResult(d);
    }),    
  二级: {
    title: '.stui-content__detail h1--span&&Text;',
    img: '.stui-vodlist__thumb img&&data-original',
    desc: ';;;;',
    content: '.desc--a&&Text',
    tabs: '.nav-tabs li',
    lists: '.tab-pane:eq(#id) li',
  },
    play_parse: true,
    lazy:muban.mxpro.lazy,
  limit: 6,
}