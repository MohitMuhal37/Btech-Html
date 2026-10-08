const addElement = (item) => {
    const li = document.createElement("li");
    const text = document.createTextNode(item);
    li.appendChild(text);
    document.querySelector(".items").appendChild(li);
}
addElement("Guvava");