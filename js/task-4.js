let counterValue = document.querySelector('#value').textContent
const decrement  = document.querySelector('[data-action="decrement"]');
const increment  = document.querySelector('[data-action="increment"]');
let decrementBtn = function (){
    counterValue--
    document.querySelector('#value').textContent = counterValue;
};
let incrementBtn = function (){
    counterValue++
    document.querySelector('#value').textContent = counterValue;
};
decrement.addEventListener('click',decrementBtn)
increment.addEventListener('click',incrementBtn)
