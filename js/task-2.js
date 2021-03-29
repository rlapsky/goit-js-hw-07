const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
let ulList = document.querySelector("#ingredients");
const foodIngredients = ingredients.forEach(ingredient => {
    let items = document.createElement("li");
    items.textContent = ingredient;
    ulList.append(items);
});

console.log(ulList);
