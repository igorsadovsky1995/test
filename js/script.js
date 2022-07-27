$(document).ready(function(){
   $('.site-footer__image').css({"background":"url('../"+ $('.site-footer__image img').attr('src') +"')","background-position":"bottom","background-size":"cover"});
   $('.site-footer__image img').hide();

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
})