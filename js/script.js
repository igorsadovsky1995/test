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

    $('iframe').on('load',function(){
   
        function loaded(){
            
            $('.loading').addClass('hide');
            $('.site-main').addClass('show');
            $('.site-header').addClass('show');
            setTimeout(bodyScroll,1500);
            function bodyScroll(){
                $('body').css({"overflow":"auto"})
            }
        }
        setTimeout(loaded,1500)

        
    })
   
   
})