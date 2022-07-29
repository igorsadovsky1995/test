
$(document).ready(function(){
   function changeBlock(){
        if(window.innerWidth < 992){
            $('.col-site__item').appendTo('.site-footer__content');
        }
        if(window.innerWidth > 992){
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
        
        $('.loading').addClass('bg-loading');
        $('.loading__title').css({'display':'block'});
        var imagesCount  = $('img').length;

        for (var i = 0; i < imagesCount; i++) { 
            
            var img_copy        = new Image();
            img_copy.src        = document.images[i].src;
            img_copy.onload     = img_load;
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



