function subscribe(){
    const buttonElement = document.querySelector('.js-subscribe-button')
    if(buttonElement.innerHTML==='Subscribe'){ /* you can use innerText to replace innerHTML but you have to ensure that no space should be there before subscribe text or nor in the new line in the button*/ 
        buttonElement.innerHTML= 'Subscribed'
    }
    else{
        buttonElement.innerHTML='Subscribe'
    }
}