const items = document.querySelectorAll(".item");

console.log(`Numbers of categories: ${items.length}`);

const array = Array.from(items);

array.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    const list = element.lastElementChild;
    console.log(`Elements: ${list.children.length}`)
});