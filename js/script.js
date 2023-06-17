document.addEventListener("DOMContentLoaded", () => {

    const projectTab = document.querySelectorAll('.project__tabs span');
    const contents = document.querySelectorAll('.project__content');
    for(let i = 0 ; i < projectTab.length ; i++){
        projectTab[i].addEventListener('click',function(e){
            removeTabClass ()
            e.target.classList.add('active')
            contents[i].classList.add('content-show');
        })
    }

    function removeTabClass (){
        for(let i = 0 ; i < projectTab.length ; i++){
            projectTab[i].classList.remove('active')
            contents[i].classList.remove('content-show');
        }
    }

    //----------------- POPUP --------------------------

    const buttonPopupAll = document.querySelectorAll('.col-project__button button');
    
    for(let i=0;i <  buttonPopupAll.length;i++){
        buttonPopupAll[i].addEventListener('click',function(){
            document.querySelector('.popup-project').classList.add('action')
            let content = buttonPopupAll[i].parentElement.closest('.project__row')
            let title = content.querySelector('h3')
            let text = content.querySelector('#textPopup')
            let images = content.querySelector('#imagesPopup')

            document.querySelector('.popup-project__body h3').innerHTML=title.textContent;
            addContentPopup(text,document.querySelector('.col-popup-project__text'))
            addContentPopup(images,document.querySelector('.col-popup-project__images'))

            // carousel

            const carouselImages = document.querySelectorAll('.col-popup-project__images img')
            
            let count = 0;
            carouselImages[count].classList.add('show')
            
            document.querySelector('.carousel-next').addEventListener('click',function(){
                clearImages()
                count < carouselImages.length-1 ? count++:count=0
                carouselImages[count].classList.add('show')
            })
            document.querySelector('.carousel-prev').addEventListener('click',function(){
                clearImages()
                count > 0 ? count--:count = carouselImages.length-1
                carouselImages[count].classList.add('show')
            })

            
        })  
    }

    document.querySelector('.popup-project__close').addEventListener('click',closePopup)
    document.querySelector('.popup-project__bg').addEventListener('click',closePopup)
    function closePopup(){
        document.querySelector('.popup-project').classList.remove('action')
        clearImages()
    }

    function addContentPopup(elements,target){
        target.innerHTML=''
        let clone = elements.cloneNode(true)
        target.appendChild(clone)
    }

    function clearImages(){ 
        const carouselImages = document.querySelectorAll('.col-popup-project__images img')
        for(el of carouselImages){
            el.classList.remove('show')
        }
    }

});