/**
 * 搜索 > 图片加法验证
 * 网址导航 https://auete.site
 */

var rule = {
	title: 'Auete',
	// host:'https://haozhansou.com',
	host: 'https://auete.pro',
	//hostJs: 'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src = jsp.pdfh(html,"ul&&li&&a&&href");print(src);HOST=src',//网页域名根动态抓取js代码。通过HOST=赋值
	// url:'/fyclassfyfilter/indexfypage.html[/fyclassfyfilter/index.html]',
	url: '/fyclassfyfilter/indexfypage.html[/fyclassfyfilter/index.html]',
	filterable: 1,
	filter_url: '{{fl.class}}',
	filter: 'H4sIAAAAAAAAA63TQU/CMBgG4P/SM4l3zp5IvHnScChuGRujE3EoEBKQEAETkQTRCIkXDTMmCjEmCMxfwzb4F3YbbO88c1yfdn379WuZHGgFWSTx4zLJiEUSJycqzedJjDCa5cPEao3seoN/F6iq+/OYO9ww1nXDHeYfpBLbjPaHfL7Tut7A3qVyGmLbWJpDQKEUotOc8G0AaQ5w1LV+5oCZdIh27c6u9hFTgPW2ffUEqOQBm4/LWQuwBIH8c+NKN1CykoyRw8KOyuX83vL52w00PSvKga2f38DSlCl6GPzhFexMRvoaAxXpOUV1zC7oBWUSoNXBpdGF1sBczgJjoiyESe3pJ64rpCQlsNXNBOPI/oZeFY+Ku2q6genMF9s9JF0raUzCOoLyOkaU3wAor7+vXsD97K4Ctg2nNw+6nu+Q1ilepr14Dy8zSxkeDYwfDZFnB+TZPfSi5+RzuqPwq4+xZd7DO0io8DDnHasxRRT+I1x/QlAinfgycnrfljkJ+hH+7DfcqlqLTlGpJsiUuY3kHbXyB3CdP/rABAAA',
	searchUrl: '/auete3so.php?page=fypage&searchword=**',
	searchable: 2,
	quickSearch: 1,
	headers: {
		'User-Agent': 'PC_UA',
        'Cookie': 'ssea2_search=ok'
	},
	class_parse: '.mr-auto li:gt(0):lt(6);a&&Text;a&&href;/(\\w+)/index.html',
    tab_remove:'云播F线',
	play_parse: true,
	    lazy: $js.toString(() => {
        input = {
            parse: 1,
            url: input,
            js: 'document.querySelector("#player iframe").contentWindow.document.querySelector("#myVideo").click()',
        }
    }),
	limit: 6,
    
	推荐: '*',
	一级: '.threadlist .trans_3;.title&&Text;.lazy&&src;.hdtag&&Text;a&&href',
	二级: {
		"title":".cover a&&title;.message&&p:eq(2)&&Text",
		"img": ".cover img&&src",
		"desc":".w-100&&Text;;.message&&p:eq(4)&&Text;.message&&p:eq(5)&&Text;.message&&p:eq(6)&&Text",
		"content": ".message p:eq(-1)&&Text",
		"tabs": `js:
			TABS = [];
			let tabs = pdfa(html, 'h2');
			tabs.forEach((it) => {
				TABS.push(pdfh(it, "body&&Text").split('』')[1].split('：')[0])
			});
		`,
		"lists": "#player_list:eq(#id) li"
	},
	搜索: '.card-body .media;.text-danger&&Text;;.data&&Text;a&&href',
}