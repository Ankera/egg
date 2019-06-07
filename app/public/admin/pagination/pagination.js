function createPage(el) {
	var element = $(el)
	element.append('<a class="prev_top_btn page_common_btn_style"></a>')
	$(el + ' .prev_top_btn').append('<span class="iconfont icon-most-left"></span>')
	element.append('<a class="prev_btn page_common_btn_style"></a>')
	$(el + ' .prev_btn').append('<span class="iconfont icon-zuo"></span>')
	element.append('<div class="page_btn_box"></div>')
	element.append('<a class="next_btn page_common_btn_style"></a>')
	$(el + ' .next_btn').append('<span class="iconfont icon-you"></span>')
	element.append('<a class="next_bottom_btn page_common_btn_style"></a>')
	$(el + ' .next_bottom_btn').append('<span class="iconfont icon-most-right"></span>')
	return {
		el: el,
		html: $(el).html(),
	}
}

function setPage(dom, pageData) {
	var pageData = pageData;
	if (pageData == undefined) {
		pageData = {};
	}
	if (pageData.maxBtnNum < 5 || pageData.maxBtnNum == undefined) {
		pageData.maxBtnNum = 5;
	}
	if (pageData.pageCurrent == undefined) {
		pageData.pageCurrent = 1;
	}
	if (pageData.pageSize == undefined) {
		pageData.pageSize = 10;
	}
	if (pageData.pageTotal == undefined) {
		pageData.pageTotal = 0;
	}
	$(dom.el).html(dom.html)
	var btnSum;
	if (pageData.pageTotal < pageData.pageSize) {
		btnSum = 1;
	} else if (pageData.pageTotal % pageData.pageSize === 0) {
		btnSum = pageData.pageTotal / pageData.pageSize;
	} else {
		btnSum = parseInt(pageData.pageTotal / pageData.pageSize) + 1;
	}
	
	var Current = pageData.pageCurrent;
	if (Current <= 0) {
		Current = 1;
	} else if (Current > btnSum) {
		Current = btnSum;
	}
	

	function createBtnItem(pageCurrent) {
		var _len;
		if (pageData.maxBtnNum >= btnSum) {
			_len = btnSum;
		} else {
			_len = pageData.maxBtnNum;
		}
		
		var minPageNum, maxPageNum;
		minPageNum = pageCurrent - parseInt(_len / 2);
		maxPageNum = pageCurrent + parseInt(_len / 2);
		if (_len % 2 === 0) {
			maxPageNum--
		}
		if (minPageNum < 1) {
			maxPageNum += 1 - minPageNum;
			minPageNum = 1;
		}
		if (maxPageNum > btnSum) {
			minPageNum -= maxPageNum - btnSum;
			maxPageNum = btnSum;
		}
		
		var html_S = '',
			content_html = '';
		for (var i = minPageNum; i < maxPageNum + 1; i++) {
			if (i == pageCurrent) {
				html_S = '<span class="page_common_btn_style page_common_btn_active" data-pageIndex="' + i + '">' + i + '</span>';
			} else {
				html_S = '<a class="page_common_btn_style" data-pageIndex="' + i + '">' + i + '</a>';
			}
			if (i == minPageNum && minPageNum != 1) {
				html_S = '<span class="page_common_btn_style">路路路</span>'
			}
			if (i == maxPageNum && maxPageNum != btnSum) {
				html_S = '<span class="page_common_btn_style">路路路</span>'
			}
			content_html += html_S;
		}
		$(dom.el + ' .page_btn_box').html(content_html)
	}
	createBtnItem(Current);
	setUpbtnState(dom.el, Current)
	$(dom.el + ' .page_btn_box').on('click', 'a.page_common_btn_style', function() {
		Current = parseInt($(this).attr('data-pageIndex'));
		pageData.change(Current)
		createBtnItem(Current);
		setUpbtnState(dom.el, Current)
	})
	$(dom.el).on('click', 'a.prev_btn', function() {
		if (Current <= 1) {
			return;
		}
		Current -= 1;
		pageData.change(Current)
		createBtnItem(Current);
		setUpbtnState(dom.el, Current)
	})
	$(dom.el).on('click', 'a.prev_top_btn', function() {
		if (Current <= 1) {
			return;
		}
		Current = 1;
		pageData.change(Current)
		createBtnItem(Current);
		setUpbtnState(dom.el, Current)
	})
	$(dom.el).on('click', 'a.next_btn', function() {
		if (Current >= btnSum) {
			return;
		}
		Current += 1;
		pageData.change(Current)
		createBtnItem(Current);
		setUpbtnState(dom.el, Current)
	})
	$(dom.el).on('click', 'a.next_bottom_btn', function() {
		if (Current >= btnSum) {
			return;
		}
		Current = btnSum;
		pageData.change(Current)
		createBtnItem(Current);
		setUpbtnState(dom.el, Current)
	})

	function setUpbtnState(dom_s, num) {
		var css_s = {
			'color': '#b2b2b2',
			'opacity': '0.6',
		}
		var none_css = {
			'color': '#606266',
			'opacity': '1',
		}
		if (num <= 1) {
			setCssStyle(1, css_s)
			setCssStyle(2, none_css)
		} else if (num >= btnSum) {
			setCssStyle(2, css_s)
			setCssStyle(1, none_css)
		} else {
			setCssStyle(1, none_css)
			setCssStyle(2, none_css)
		}

		function setCssStyle(type, _cssObject) {
			if (type == 1) {
				$(dom_s + ' .prev_top_btn').css(_cssObject)
				$(dom_s + ' .prev_btn').css(_cssObject)
			} else {
				$(dom_s + ' .next_btn').css(_cssObject)
				$(dom_s + ' .next_bottom_btn').css(_cssObject)
			}
		}
	}
}