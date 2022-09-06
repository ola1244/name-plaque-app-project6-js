const buy = document.querySelector('.buy-submit')
const msg = document.querySelector('.msg-1')
const retry = document.querySelector('.refresh')

let resetbtn;

//Arrow function
buyNow=() =>{
    if (userInput.value === '') {
        msg.textContent = 'Please input a letter'
        msg.style = 'background-color: none'
        userInput.focus()
    }

    else if (userInput.value.length > 15) {
        msg.textContent = 'You have exeeded the available letters'
        msg.style= 'background-Color:red'
        userInput.disabled= true
    }
    else {
        msg.textContent= '...Order Placed Successfully...'
        msg.style.backgroundColor = 'green'
        userInput.disabled= true

    }
       
    
    if (userLeterPreview.textContent === 'Your Name') {
        msg.textContent='Please input a custom letter'
        msg.style = 'background-color: red'
        userInput.focus()
    }

}
buy.addEventListener('click', buyNow)

//Refresh function

refresh=() =>{
    userInput.disabled = false
    userInput.value = ''
    userInput.focus()
    userLeterPreview.textContent = 'Your Name'
    userPricePreview.textContent = '$' + ''
    msg.textContent = ''
    msg.style= 'backgroundColor:none'
}
retry.addEventListener('click', refresh)