$(function () {

	app.init();
	app.initImage();
})


var app = {
	init: function () {
		this.toggleAside();
	},

	toggleAside: function () {
		$('.aside h4').click(function () {
			$(this).siblings('ul').slideToggle();
		})
	},

	initImage:function(){
		let _img = $('#_oss_upload_image');
		let _src = _img.attr('src');
		$('#_oss_upload_image').css({
			display:  _src ? "block" : "none"
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
		formData.append("file",file);

		$.ajax({
			url: "/admin/uploadFile?_csrf="+csrf,
			type: 'POST',
			cache: false,
			data: formData,
			processData: false,
			contentType: false,
			dataType:"json",
			success : function(data) {
				if(data.status){
					$('#_oss_upload_image').attr("src",data.url);
					$('#_oss_upload_image').css({
						"display":"block",
						"maxWidth":"240px"
					});
					$('#_oss_upload_image_hidden').attr("value", data.url);
				}
			}
		});
	}
}