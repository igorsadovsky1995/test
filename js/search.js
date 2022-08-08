$(document).ready(function(){
    
    let cityes=$('.search-result-indicator__link');
    function searchCity(){
       
       
        let inputText = $('#city-search').val();
        let notFound=0;
        if(inputText != ""){  
            
            $('.block-map-indicators__search-result').addClass('search-show'); 
            for(let i=0; i < cityes.length;i++)
            {
                if($(cityes).eq(i).text().toLowerCase().search(inputText.toLowerCase()) == -1)
                {   
                    notFound++;
                    $(cityes).eq(i).hide();
                    $(cityes).eq(i).html($(cityes).eq(i).text());
                    if(notFound == cityes.length && $('.indicator-search__not-found').length == 0){
                        $('.search-result-indicator__list').append('<li class="indicator-search__not-found text-p-16">Результат не найден.</li>')
                    }
                    
                }
                else
                {
                    $('.indicator-search__not-found').remove();
                    $(cityes).eq(i).show();
                    let str=$(cityes).eq(i).text();
                    $(cityes).eq(i).html(insertMark(str,$(cityes).eq(i).text().toLowerCase().search(inputText.toLowerCase()),inputText.length))
                }
            }
        }
        else
        {
            
            $('.block-map-indicators__search-result').removeClass('search-show'); 
            setTimeout(100,function(){$(cityes).show();$('.indicator-search__not-found').remove();});
            for(let i=0; i < cityes.length;i++)
            {
                $(cityes).eq(i).html($(cityes).eq(i).text());
               
            }   
        }
        function insertMark(string,pos,len){
            return string.slice(0,pos)+'<span class="indicator-search-mark">'+ string.slice(pos,pos+len)+"</span>"+string.slice(pos+len);
        }
    }
    
   
    //let input=document.getElementById('searchButton');
    var input = document.body.children[0];

    $('#city-search').on('input', searchCity)

    $('.popup-map-search__close , .popup-map-search__close-viev ').click(function(){
        $('#city-search').val("")
        searchCity()
    })

})