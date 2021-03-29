
let inputValue = document.querySelector("#name-input")
let output = document.querySelector("#name-output")
function changeSpan(){
    inputValue.value === ''? output.textContent = 'незнакомец':
    output.textContent = inputValue.value
}
inputValue.addEventListener('input', changeSpan)

