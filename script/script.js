$(document).ready(function(){
    
    /*------------------ HLS ----------------*/
    let audio = document.getElementById("music");
    let source = "https://hls-01-radio53.hostingradio.ru/radio53/playlist.m3u8"

    if (Hls.isSupported()) {
    console.log("hello hls.js!");

    let hls = new Hls();
    hls.attachMedia(audio);
    hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        console.log("video and hls.js are now bound together !");
        hls.loadSource(source);
    });
    }

    /*-------------------- CONTROL --------------*/
    function volume(){
        $('.controls-site-sound__bar').css({'width':''+ $('.controls-site-sound__range input').val()+'%'})
        var music = $('#music');
        music[0].volume=$('.controls-site-sound__range input').val() / 100;
    }
    function player(){
        $('.plyr').hide();
        $(".controls-site-sound__button").addClass('music-play');
        $(".controls-site-sound__button").html('<svg width="14" height="16" viewBox="0 0 14 16" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M14 8L0.499999 15.7942L0.5 0.205771L14 8Z" fill="white"/></svg>');
        volume();
    }
    player();
    function playMusic(){
        var music = $('#music');
        music[0].play();
        $(".controls-site-sound__button").removeClass('music-play');
        $(".controls-site-sound__button").addClass('music-pause')
    }
    function pauseMusic(){
        var music = $('#music');
        music[0].pause();
        $(".controls-site-sound__button").removeClass('music-pause');
        $(".controls-site-sound__button").addClass('music-play')
    }
    $('.controls-site-sound__button').click(function(){
        if($(".controls-site-sound__button").hasClass('music-pause')){
            pauseMusic();
            $(".controls-site-sound__button").html('<svg width="14" height="16" viewBox="0 0 14 16" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M14 8L0.499999 15.7942L0.5 0.205771L14 8Z" fill="white"/></svg>')
            
        }
        else{
            playMusic();
            $(".controls-site-sound__button").html('<svg width="14" height="16" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z"/></svg>')
        }
    
    })
    $('.controls-site-sound__range').on('input',volume);

    var memoryVolume;
    
    $('.controls-site-sound__volume-svg').click(function(){
        var music = $('#music');
        if(!$('.controls-site-sound__volume-svg').hasClass('quiet')){
            $('.controls-site-sound__volume-svg').addClass('quiet');
            memoryVolume=$('.controls-site-sound__range input').val() / 100;
            music[0].volume=0;
            console.log(0)
        }else{
            $('.controls-site-sound__volume-svg').removeClass('quiet');
            music[0].volume=memoryVolume;
        }
    })

    /* SCROLL*/
       
        $('.content-site-sound__text').mCustomScrollbar({
            theme:"my-theme",
            axis:"y"
        });

        
        
    
    
})


