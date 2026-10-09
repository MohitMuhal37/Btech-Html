const btn = document.querySelector(".btn1");
const addElement = (item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item}
            <button class="remove-item btn-link text-red">
                <i class="fa-solid fa-xmark"></i>
            </button>`
    document.querySelector(".items").appendChild(li);
}

// clean and Performant way

const createNewItem = (item) => {
    const li = document.createElement("li");
    const text = document.createTextNode("Papaya");
    li.appendChild(text);

    const button = createButton("remove-item btn-link text-red");

    li.appendChild(button);
    console.log(li.innerHTML)
    document.querySelector(".items").appendChild(li);
}
// addElement("Guvava");

const createButton = (classes) => {
    const button = document.createElement("button");
    button.className = classes;

    const icon = createIcon("fa-solid fa-xmark");
    button.appendChild(icon);
    return button;
}
const createIcon = (classes) => {
    const icon = document.createElement("i");
    icon.className = classes;
    return icon;
}

btn.addEventListener("click",createNewItem);