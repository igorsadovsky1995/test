
$(document).ready(function(){
    $('.loading').css({'background-image': 'url("'+ $(".loading__bg").attr("src")+'")','background-size':'cover','background-position':'center'})
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

    
    

    
    var imagesCount  = $('img').length;

    for (var i = 0; i < imagesCount; i++) { 
        
        var img_copy        = new Image();
        img_copy.src        = document.images[i].src;
        img_copy.onload     = img_load;
        img_copy.onerror    = img_load;

        if(i == imagesCount-1){
            function loaded(){
                $('.loading').addClass('hide');
                setTimeout(bodyScroll,1500);
                function bodyScroll(){
                    $('body').css({"overflow":"auto"})
                }
            }
            setTimeout(loaded,2000)
        }
    }
    var count=0;
    var progress;
    function img_load(){
        count++;
        progress =(count * 100) / imagesCount;  
        console.log(100 - progress)
        $('.title-h1.loading__transparent').css({'height':''+100 -progress +'%'})
    }


})



