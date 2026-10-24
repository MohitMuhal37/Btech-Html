// const itemInput = document.getElementById("item-input")
// const priorityInput = document.getElementById("priority-input")
// const checkbox = document.getElementById("checkbox")
// const heading = document.querySelector("h1")

// const onInput = (e) => {
//     heading.textContent = e.target.value;
// }

// const onChecked = (e) => {
//     heading.textContent = e.target.checked ? "checked" : "unchecked"
// }

// const onFocus = () => {
//     console.log("input is focus")
//     itemInput.style.outlineStyle = "solid";
//     itemInput.style.outlineWidth = "5px";
//     itemInput.style.outlineColor = "pink";
// }
// const onBlur = () => {
//     console.log("input is Blur")
//         itemInput.style.outlineStyle = "none";

// }

// itemInput.addEventListener("input",onInput);
// priorityInput.addEventListener("input",onInput);
// checkbox.addEventListener("input",onChecked);
// itemInput.addEventListener("focus",onFocus);
// itemInput.addEventListener("blur",onBlur);

// ---- form validation ---- 
const form = document.getElementById("item-form");

const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");

    const item = document.getElementById("item-input").value
    const pItem = document.getElementById("priority-input").value
    if(item === "" || pItem === "0"){
        alert("please fill All Field")
    // console.log(item,pItem);
    return;
    } 
}

const onSubmit2 = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const item = formData.get("item");
    const priority = formData.get("priority");
    console.log(item,priority);

}
form.addEventListener("submit",onSubmit2);