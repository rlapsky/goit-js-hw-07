const totalCategories = document.querySelectorAll('.item');
console.log(`В списке ${totalCategories.length} категории.`);

const categoriesArray = [...totalCategories]
.map( categories => `Категория ${categories.children[0].textContent}
Количество елементов: ${categories.children[1].children.length}`)
.join('\n')

