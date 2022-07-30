
$(document).ready(function(){
   function changeBlock(){
        if(window.innerWidth < 992){
            $('.indicators__body').css({'height':'auto'});
            
            $('.col-site__item').appendTo('.site-footer__content');
        }
        if(window.innerWidth > 992){
           
            let heightMain = window.innerHeight - ($('.site-header').outerHeight(true) + $('.site-footer').outerHeight(true) ) - 20;
            let heightText =heightMain - 70 - $('.numbers-indicators__items').outerHeight(true);
            if(heightText > 100 ){
                $('.indicators__text-scroll').css({'max-height':''+ heightText +'px'});
            }else{
                $('.indicators__text-scroll').css({'max-height':'100px'});
            }
            
            
            $('.indicators__body').css({'height':''+ heightMain +'px'});
            $('.col-site__item').appendTo('.col-site');
        }
        
    }
    changeBlock();
    $(window).resize(changeBlock);

    
    
    var img_obj = new Image();
        img_obj.src        = $('.loading__bg');
        img_obj.onload     = loading;
        img_obj.onerror    = loading;

    function loading(params) {
        $('.site-footer__image').css({'background-image': 'url("'+$('.site-footer__image-svg').attr('src')+'")','background-position':'left bottom','background-size': 'cover'});
        $('.title-h1.loading__transparent').css({'background-image': 'url("'+$('.loading__bg').attr('src')+'")'});
        $('.loading').css({'background-image': 'url("'+$('.loading__bg').attr('src')+'")','background-size': 'cover'});
        $('.loading').addClass('bg-loading');
       
        var imagesCount  = $('img').length;
        $('.loading__title').css({'display':'block'});
        for (var i = 0; i < imagesCount; i++) { 
            
            var img_copy        = new Image();
            img_copy.src        = document.images[i].src;
            img_copy.onload     = setTimeout(img_load,400);
            img_copy.onerror    = img_load;

            if(i == imagesCount-1){
                function loaded(){
                    $('.loading').addClass('hide-loading');

                    setTimeout(bodyScroll,1500);
                    function bodyScroll(){
                        $('body').css({"overflow":"auto"})
                    }
                }
                setTimeout(loaded,2500)
            }
        }
        var count=0;
        var progress;
        function img_load(){
            count++;
            
            progress =(count * 100) / imagesCount; 
            $('.title-h1.loading__transparent').css({'height':''+100 -progress +'%'})
        }
    }
    


})



