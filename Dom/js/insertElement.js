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
insertText("hi")