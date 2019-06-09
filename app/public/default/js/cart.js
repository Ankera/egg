(function ($) {

    let app = {
        init: function () {
            this.initCheckBox();
            this.changeCartNum();
            
            this.deleteConfirm();
        },
        deleteConfirm:function(){
            $('.delete').click(function(){
                let flag=confirm('您确定要删除吗?');
                return flag;
            })
        },
        initCheckBox() {
            $("#checkAll").click(function () {
                if (this.checked) {
                    $(":checkbox").prop("checked", true);
                    $.get('/changeAllCart?type=1',function(response){                   
                        if(response.success){
                            $("#allPrice").html(response.allPrice+'元');                       
                        }
                    }); 
                } else {
                    $(":checkbox").prop("checked", false);
                    $.get('/changeAllCart?type=0',function(response){                   
                        if(response.success){
                            $("#allPrice").html(response.allPrice+'元');                       
                        }
                    }); 
                }
            });
            $(".cart_list input:checkbox").click(function () {
                let chknum = $(".cart_list input:checkbox").size();//checkbox总个数
                let chk = 0;  //checkbox checked=true总个数
                $(".cart_list input:checkbox").each(function () {
                    if ($(this).prop("checked") == true) {
                        chk++;
                    }
                });
                if (chknum == chk) {//全选
                    $("#checkAll").prop("checked", true);
                } else {//不全选
                    $("#checkAll").prop("checked", false);
                }

                let goods_id=$(this).attr('goods_id');
                let color=$(this).attr('color');
                $.get('/changeOneCart?goods_id='+goods_id+'&color='+color,function(response){                   
                    if(response.success){
                        $("#allPrice").html(response.allPrice+'元');                       
                    }
                }); 
            });
        },
        changeCartNum() {
            $('.decCart').click(function () {
                let goods_id = $(this).attr('goods_id');
                let color = $(this).attr('color');
                $.get('/decCart?goods_id=' + goods_id + '&color=' + color, function (response) {
                    if (response.success) {
                        $("#allPrice").html(response.allPrice + '元');
                        $(this).siblings('.input_center').find('input').val(response.num);
                        let price = parseFloat($(this).parent().parent().siblings('.price').html());
                        $(this).parent().parent().siblings('.totalPrice').html(response.num * price + "元");
                    }
                }.bind(this));   //注意this指向
            })
            $('.incCart').click(function () {
                let goods_id = $(this).attr('goods_id');
                let color = $(this).attr('color');
                $.get('/incCart?goods_id=' + goods_id + '&color=' + color, function (response) {
                    if (response.success) {
                        $("#allPrice").html(response.allPrice + '元');
                        $(this).siblings('.input_center').find('input').val(response.num);
                        let price = parseFloat($(this).parent().parent().siblings('.price').html());
                        $(this).parent().parent().siblings('.totalPrice').html(response.num * price + '元');
                    }
                }.bind(this));
            })
        }
    }
    $(function () {
        app.init();
    })
})($)
