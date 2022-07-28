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

  
    function loaded(){
        
        $('.loading').addClass('hide');
        setTimeout(bodyScroll,1500);
        function bodyScroll(){
            $('body').css({"overflow":"auto"})
        }
    }
    setTimeout(loaded,2800)

        
    
   
   
})