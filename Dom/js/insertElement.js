// insert Adjacent html
const insertElement = (item) => {
    const para = document.querySelector(".para");
    const h1 = document.createElement("h1");
    const text = document.createTextNode(item);
    h1.appendChild(text);
    para.insertAdjacentElement("afterbegin",h1);
}
insertElement("Hello Mohit");

// insert adjacent Text
const insertText = (items) => {
    const item = document.querySelector("li:first-child");
    item.insertAdjacentText("afterend",items);
}
// insertText("hi")

// replace Item
const replaceFirstItem = () => {
    const firstItem = document.querySelector("li:first-child");

    const li = document.createElement("li");
    li.textContent = "Replace Me";
    firstItem.replaceWith(li);
}
replaceFirstItem();

const replaceAll = () => {
    const li = document.querySelectorAll("li");
    li.forEach((item) => {
        item.outerHTML = `<h1> Hello jaan</h1>`
    }) 
}

replaceAll();

const removeItem = () => {
    const li = document.querySelector("li");
    li.forEach((item) => {
        item.remove();
    })
}
removeItem();