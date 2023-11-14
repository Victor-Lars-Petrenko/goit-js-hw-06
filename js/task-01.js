const pseudoArrOfItems = document.querySelectorAll("ul#categories>li");

console.log("Number of categories: ", pseudoArrOfItems.length);

const arrOfItems = [...pseudoArrOfItems];

arrOfItems.map(item => {

    const headingOfItem = item.querySelector("h2").textContent;
    const numberOfLi = item.querySelectorAll("ul>li").length;

    console.log(`Category: ${headingOfItem} \nElements: ${numberOfLi}`)
})