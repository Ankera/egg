$(function(){
	
	app.init();
})


var app={
	init:function(){
		this.toggleAside();
	},
	toggleAside:function(){
		$('.aside h4').click(function(){
			$(this).siblings('ul').slideToggle();
		})
	},

	/**
	 * 
	 * @param {*} el 点击对象本身
	 * @param {*} type 1代表管理员，2代表角色，3代表权限
	 * @param {*} status 1取消， 0赞成
	 * @param {*} id 
	 */
	changeStatus:function(el,type, status, id){
		$.get('/admin/changeStatus',{type,status,id},function(data) {
			if (data.success) {
				if (el.src.indexOf('yes') != -1) {
					el.src = '/public/admin/images/no.gif';
				} else {
					el.src = '/public/admin/images/yes.gif';
				}
			}
		})
	}
}