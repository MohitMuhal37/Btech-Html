const itemInput = document.getElementById("item-input")
const priorityInput = document.getElementById("priority-input")
const checkbox = document.getElementById("checkbox")
const heading = document.querySelector("h1")

const onInput = (e) => {
    heading.textContent = e.target.value;
}

const onChecked = (e) => {
    heading.textContent = e.target.checked ? "checked" : "unchecked"
}

itemInput.addEventListener("input",onInput);
priorityInput.addEventListener("input",onInput);
checkbox.addEventListener("input",onChecked);