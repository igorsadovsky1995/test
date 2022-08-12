"use strict"
$(document).ready(function(){
    $('.popup__close , .popup__fullClose').click(function(){
       $('.popup .contacts__input-text').val("");
       $('.popup .contacts__input-text').removeClass('_error')
    })


    $('.form__submit').on('click',formSend);
    
    async function formSend(e){
        e.preventDefault();

        let error =formValidation( $(this).parents('#form'));

        if(error === 0){
            if($(this).parents('.popup').length > 0){
                location.href='#header';
            }
            
            $(this).parents('#form').children('input').val("");
        }
    }

    function formValidation(form){
        
        let error=0;
        let req=$(form).children('._req');

        for(let i=0;i < req.length;i++){
            const input = $(req).eq(i);
            formremoveError(input)

            if($(input).hasClass('_tel')){
                if(testTel(input) == false){
                    formAddError(input);
                    error++;
                }else{
                    formremoveError(input)
                }
                
            }
            else
            {
                if($(input).val() ===""){
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    $('.contacts__input-text').on('input',function(){     
        if($(this).hasClass('_tel')){
            if(testTelRealTime($(this)) == false  ){
                formAddError($(this))
            }
            else
            {
                formremoveError($(this))
            }
        }else{
            if($(this).val() ===""){
                formremoveError($(this))
            }
            if($(this).val().length > 0){
                formremoveError($(this))
            }
        }
    });

    function formAddError(input){
        $(input).addClass('_error');
        $(input).parents('#form').addClass('_error');
    }
    function formremoveError(input){
        $(input).removeClass('_error');
        $(input).parents('#form').removeClass('_error');
    }

    function testTelRealTime(input){
        return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){0,14}(\s*)?$/.test($(input).val())

    }
    function testTel(input){
        return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test($(input).val())

    }
})