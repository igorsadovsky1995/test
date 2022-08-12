$(document).ready(function(){
    function fullScreen(){
        let heaghtHeader=$('.site-header').outerHeight(true)/2;
        $('.mechanization__body').css({'transform':'translateY('+heaghtHeader+'px)'});
    }
    fullScreen()
    $(window).resize(fullScreen);

    $('#ourWork').click(function(e){
        e.preventDefault();
        $('html').animate({ 
    	    scrollTop: $('.our-work').offset().top -50
        }, 200 
        );
    })

   
    
    function tableMobil(){
        let priceName =$('.price__name').html();
        $('.price__meter').after('<div class="price__row price__name price-name__double">'+priceName+'</div>');  
    }
    function tablePC(){
        $('.price-name__double').remove()
    }
    if (window.innerWidth < 992) {     
        tableMobil()
    } 
    else
    {
        tablePC();
    }
    const mQuery = window.matchMedia('(max-width: 992px)')

    function handleMobilePhoneResize(e) {   
        if (e.matches) {     
            tableMobil()
        } 
        else
        {
            tablePC();
        }
    } 
    mQuery.addListener(handleMobilePhoneResize)
})