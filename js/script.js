
$(document).ready(function(){
   function changeBlock(){
        if(window.innerWidth < 992){
            $('.indicators__body').css({'height':'auto'});
            $('.col-site__item').appendTo('.site-footer__content');
        }
        if(window.innerWidth > 992){
            let heightMain = window.innerHeight - ($('.site-header').outerHeight(true) + $('.site-footer').outerHeight(true) )-20;
            $('.indicators__body').css({'height':''+ heightMain +'px'});
            $('.col-site__item').appendTo('.col-site');
        }
        
    }
    changeBlock();
    $(window).resize(changeBlock);

    /* SCROLL*/       
    $('.indicators__text-scroll').mCustomScrollbar({
        theme:"my-theme",
        axis:"y"
    });

    $('.search-result-indicator__list').mCustomScrollbar({
        theme:"my-theme",
        axis:"y",
        live: "on"
    });

   
    /*-------------------- box-scroll ----------------*/
    function scrollBox(){
        if(window.innerWidth > 992){
            let heightMain=$('.indicators__body').outerHeight(true);
            let heightScrollBox=$('.indicators__body').outerHeight(true) - $('.numbers-indicators').outerHeight(true) - (parseInt($('.indicators__body').css("grid-row-gap").replace("px")));
            let heightTextBox =$('.indicators__text-scroll .text-p-14').outerHeight(true) + (parseInt($('.indicators__text-scroll').css('padding-top').replace('px')) * 2) ;
            if($('.indicators__numbers').length > 0){
                
                if(heightScrollBox > heightTextBox ){
                    $('.indicators__text-scroll').css({'height':''+heightTextBox+'px'});
                }
                else
                {
                    $('.indicators__text-scroll').css({'height':'100%'});
                }
                $('.indicators__text').css({'height':''+ heightScrollBox+'px'})
            }else{
                $('.indicators__text').css({'height':''+ heightMain +'px'})
            }
        }else{
            $('.indicators__text').css({'height':'auto'});
            $('.indicators__text-scroll').css({'height':'100%'});
        }   
        
    }
    scrollBox();
    $(window).resize(scrollBox);

    /*------------------------ POPUP ---------------------*/
    $('.search-result-indicator__link').click(function(){
        $('.popup-map-search').addClass('open-search-result');
    })
    $('.popup-map-search__close , .popup-map-search__close-viev ').click(function(){
        $('.popup-map-search').removeClass('open-search-result');
    })
})



