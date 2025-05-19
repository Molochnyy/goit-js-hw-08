const listElem = document.querySelector('#categories');
console.log(`Number of categories: ${listElem.children.length}`);

const itemsElem = document.querySelectorAll('.item');
itemsElem.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});