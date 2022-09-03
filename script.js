//Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLetterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');
const buy = document.querySelector('.buy-submit');


// count letter function
// function countLetters(some_data) {
//     const OptName = some_data.replaceAll(' ', '');
//     const price = OptName.length * 5

//     userLetterPreview.textContent = some_data;
//     userPricePreview.textContent = '$' + price
// }

// userInput.addEventListener('input', function(e){
//     countLetters(e.target.value)
// })


//Arrow function

const countLetters = (some_data) =>{
    const OptName = some_data.replaceAll(' ', '');
    const price = OptName.length * 5
    if (userInput.value.length > 15) {
        alert('You have exeeded the available letters!')
        userInput.disabled = true;
    }
    userLetterPreview.textContent = some_data;
    userPricePreview.textContent = '$' + price
}
userInput.oninput = (e) =>{
    countLetters(e.target.value)
}
let input_count = 1
// const buyNow = (Isempty) =>{
//     const empty = Isempty.value("")
//     alert('Please input a letter')
//     return false;
// }
// submit.addEventListener('click', buyNow)

function buyNow(Isempty) {
        if (userInput.value = ' ') (
            alert('Please input a letter')
    )
    
    }
    buy.addEventListener('click', buyNow)
    
    