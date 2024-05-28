Object.assign(muban.mxpro.二级, {
    tab_text: 'div--small&&Text',
});
var rule = {
    模板: 'mxpro',
    title: '爱看hd',
    host: 'https://www.aikanys.vip',
	hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,"li:eq(2)&&a&&href");print(src);HOST=src',
    headers: {'User-Agent': IOS_UA},
    class_parse: '.navbar-items li:gt(0):lt(12);a&&Text;a&&href;.*/(\\d+)',
    cate_exclude: '今日更新|排序||福利|纪录|体育',
    url: '/vodshow/fyclass--------fypage---/',
    searchUrl: '/vodsearch/**----------fypage---/',
    //searchUrl: '/vodsearch/-------------/?wd=**',
    tab_exclude: '排序',
}