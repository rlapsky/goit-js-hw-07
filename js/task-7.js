let changeSize = document.querySelector("#font-size-control")
changeSize.addEventListener('input', changeSizeSpan)
let spanSize = document.querySelector("#text")
function changeSizeSpan (){
    spanSize.style.fontSize = changeSize.value + "px"
}

