
let validationValue = document.querySelector("#validation-input")
function focusout(){
    if(validationValue.value.length >= validationValue.dataset.length)
    {
        validationValue.classList.add('valid'),
        validationValue.classList.remove('invalid')
    }
    else{
        validationValue.classList.add('invalid'),
        validationValue.classList.remove('valid')
    }
}
validationValue.addEventListener('focusout', focusout)

