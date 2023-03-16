//------PART-1------//

const categoriesListRef = document.querySelector('#categories');
const listItemsRef = categoriesListRef.children;
let arr = [...listItemsRef];
let QuantityOfCategories = 0;
arr.forEach((item) => {
    QuantityOfCategories += 1;
});

console.log(`Number of categories: ${QuantityOfCategories}`);

//------PART-2------//

const itemsRef = document.querySelectorAll('.item');
itemsRef.forEach((item) => {
    const title = item.querySelector('.item>h2');
    const elements = item.querySelectorAll('.item>ul>li');
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${elements.length}`);
});











