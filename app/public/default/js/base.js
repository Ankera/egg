(function($){

    var app={
        init:function(){
    
            this.initSwiper();

            this.initNavSlide();
        },
        initSwiper:function(){    
            new Swiper('.swiper-container', {
                loop : true,
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev'                 
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true
                },
                autoplay: true
                
            });
        },
        initNavSlide:function(){
             $("#nav_list>li").hover(function(){

                $(this).find('.children-list').show();
             },function(){
                $(this).find('.children-list').hide(); 
             })          

        }
    }   
    
    $(function(){
    
    
        app.init();
    })

    

})($)
