$(document).ready(function(){
    
    $('.loading').css({'background-image': 'url("'+$('.loading__bg').attr('src')+'")','background-size': 'cover'});
    var count;
    var progress;
    var imagesCount  = $('img').length;  
    var bg =$('.loading__bg');
        bg.onload   = loadingBG();
        bg.onerror  = loadingBG(); 

    function loadingBG(params) {
        $('.site-footer__image').css({'background-image': 'url("'+$('.site-footer__image-svg').attr('src')+'")','background-position':'left bottom','background-size': 'cover','background-repeat': 'no-repeat'});
        $('.loading').addClass('bg-loading');
        $('.loading__full').css({'transition': 'all 3.4s'})       
        var img_obj = $('img');
        Array.from(img_obj).forEach((img_elem,index) =>{
            count=index;
            img_elem.onload   = setTimeout(img_load,400);
            img_elem.onerror  = img_load;
            if(index == imagesCount-1){
                function loaded(){
                    $('.loading').addClass('hide-loading');
                    setTimeout(bodyScroll,1000);
                    function bodyScroll(){
                        $('.loading').hide();
                        $('body').css({"overflow":"auto"})
                    }
                }
                setTimeout(loaded,2500)
            }
        });       
    }
    function img_load(){
            progress =1 -(count / imagesCount) ; 
            var fonts=parseInt($('.title-h1').css('font-size').replace("px")) * 2;
            $('.title-h1.loading__full').css({'background-position':'left 0 top '+fonts * progress+'px'});
        }  
})