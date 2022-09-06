const buy = document.querySelector('.buy-submit')
const msg = document.querySelector('.msg-1')
const retry = document.querySelector('.refresh')

//Arrow function
buyNow=() =>{
    if (userInput.value === '') {
        msg.textContent = 'Please input a letter'
        msg.style = 'background-color: none'
    }

    else if (userInput.value.length > 15) {
        msg.textContent = 'You have exeeded the available letters'
        msg.style= 'background-Color:red'
        userInput.disabled= true
    }
    else {
        msg.textContent= 'You did it...Congratulations'
        msg.style.backgroundColor = 'green'
        userInput.disabled= true

    }
       
    
    if (userLeterPreview.textContent === 'Your Name') {
        msg.textContent='Please input a custom letter'
        msg.style = 'background-color: red'
    }

}
buy.addEventListener('click', buyNow)

//Refresh function

refresh=() =>{
    userInput.disabled = false
    userInput.value = ''
    userLeterPreview.textContent = 'Your Name'
    userPricePreview.textContent = '$' + ''
    msg.textContent = ''
    msg.style= 'backgroundColor:none'
}
retry.addEventListener('click', refresh)