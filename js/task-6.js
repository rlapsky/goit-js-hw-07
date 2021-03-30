
let validationValue = document.querySelector("#validation-input")
function focusout(){
    if(validationValue.value.length == "6")
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

