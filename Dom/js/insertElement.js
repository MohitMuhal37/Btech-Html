// insert Adjacent html
const insertElement = (item) => {
    const para = document.querySelector(".para");
    const h1 = document.createElement("h1");
    const text = document.createTextNode(item);
    h1.appendChild(text);
    para.insertAdjacentElement("beforeend",h1);
}
insertElement("Hello Mohit");

// insert adjacent Text
