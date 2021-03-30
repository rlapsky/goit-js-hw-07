const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
// let ulList = document.querySelector("#ingredients");
// const foodIngredients = ingredients.forEach(ingredient => {
//     let items = document.createElement("li");
//     items.textContent = ingredient;
//     ulList.append(items);
// });

let itemOfUl = "";
ingredients.map(ingredient=>{
    itemOfUl+=`<li>${ingredient}</li>`
    })
    let ulList = document.querySelector("#ingredients");
    ulList.insertAdjacentHTML("beforeend",itemOfUl)

