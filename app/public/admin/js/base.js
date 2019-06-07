$(function () {

	app.init();
})


var app = {
	init: function () {
		this.toggleAside();
		this.initImage();
		this.deleteConfirm();
		this.resizeIframe();
	},

	resizeIframe: function () {
		let heights = document.documentElement.clientHeight - 100;
		$("#rightMain").height(heights+200)
		// document.getElementById('rightMain').height = heights;
	},

	toggleAside: function () {
		// 临时关闭
		$('.aside>li:nth-child(1) ul,.aside>li:nth-child(2) ul,.aside>li:nth-child(3) ul').hide();

		$('.aside h4').click(function () {
			if ($(this).find('span').hasClass('nav_close')) {
				$(this).find('span').removeClass('nav_close').addClass('nav_open');
			} else {
				$(this).find('span').removeClass('nav_open').addClass('nav_close');
			}
			$(this).siblings('ul').slideToggle();
		})
	},

	initImage: function () {
		let _img = $('#_oss_upload_image');
		let _src = _img.attr('src');
		$('#_oss_upload_image').css({
			display: _src ? "block" : "none"
		})
	},

	deleteConfirm: function () {
		$('.delete').click(function () {
			var flag = confirm('您确定要删除吗?');
			return flag;
		})
	},

	/**
	 * 
	 * @param {*} el 点击对象本身
	 * @param {*} type 1代表管理员，2代表角色，3代表权限
	 * @param {*} status 1取消， 0赞成
	 * @param {*} id 
	 */
	changeStatus: function (el, type, status, id) {
		$.get('/admin/changeStatus', { type, status, id }, function (data) {
			if (data.success) {
				if (el.src.indexOf('yes') != -1) {
					el.src = '/public/admin/images/no.gif';
				} else {
					el.src = '/public/admin/images/yes.gif';
				}
			}
		})
	},

	uploadFile: function (el, csrf) {
		let formData = new FormData();
		let file = $(el)[0].files[0];
		formData.append("file", file);

		$.ajax({
			url: "/admin/uploadFile?_csrf=" + csrf,
			type: 'POST',
			cache: false,
			data: formData,
			processData: false,
			contentType: false,
			dataType: "json",
			success: function (data) {
				if (data.status) {
					$('#_oss_upload_image').attr("src", data.link);
					$('#_oss_upload_image').css({
						"display": "block",
						"maxWidth": "240px"
					});
					$('#_oss_upload_image_hidden').attr("value", data.link);
				}
			}
		});
	},

	// 通用编辑排序方法
	editNum: function (el, type, id) {
		let val = $(el).html();
		let input = $("<input value='' />").css({ "width": "56px" });
		//把input放在sapn里面
		$(el).html(input);
		//让input获取焦点  给input赋值
		$(input).trigger('focus').val(val);
		//点击input的时候阻止冒泡
		$(input).click(function () {
			return false;
		})
		//鼠标离开的时候给sapn赋值
		$(input).blur(function () {
			let num = $(this).val();
			$(el).html(num);
			$.get('/admin/editSort', { type, id, sort: num });
		})
	},

	/**
	 * 商品专有修改价格，点击量，状态，精品，新品，热销，排序，库存方法
	 * @param {*} el  this对象本身
	 * @param {*} type 1价格， 2点击量，3状态，4精品， 5新品， 6热销， 7排序， 8库存
	 * @param {*} id 
	 * @param {*} status 
	 */
	editGoodsCommon: function (el, type, id, status) {
		if (type == 1 || type == 2 || type == 7 || type == 8) {
			let val = $(el).html();
			let input = $("<input value='' />").css({ "width": "56px" });
			//把input放在sapn里面
			$(el).html(input);
			//让input获取焦点  给input赋值
			$(input).trigger('focus').val(val);
			//点击input的时候阻止冒泡
			$(input).click(function () {
				return false;
			})
			//鼠标离开的时候给sapn赋值
			$(input).blur(function () {
				let num = $(this).val();
				$(el).html(num);
				$.get('/admin/goods/editGoodsCommon', { type, id, number: num });
			})
		} else {
			$.get('/admin/goods/editGoodsCommon', { type, status, id }, function (data) {
				if (data.success) {
					if (el.src.indexOf('yes') != -1) {
						el.src = '/public/admin/images/no.gif';
					} else {
						el.src = '/public/admin/images/yes.gif';
					}
				}
			})
		}
	},

	// 获取对应的cookie值
	getCookie(name) {
		let arr = [],
			reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if (arr = document.cookie.match(reg)) {
			return unescape(arr[2])
		} else {
			return null;
		}
	}
}

$(window).resize(function () {
	app.resizeIframe();
})