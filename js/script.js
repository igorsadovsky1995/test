$(document).ready(function(){
    function fullScreen(){
        let heaghtBlock=$(window).outerHeight(true) - $('.site-header').outerHeight(true);
        $('.mechanization__body').css({'min-height':''+heaghtBlock+'px'});
    }
    fullScreen()
    $(window).resize(fullScreen);
})