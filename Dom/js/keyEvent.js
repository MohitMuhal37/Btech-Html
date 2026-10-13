const itemInput = document.getElementById("item");
console.log(itemInput);

const onKeyPress = e => console.log("keypress");
const onKeyUp = e => console.log("keyUp");

// itemInput.addEventListener("keypress",onKeyPress);    
itemInput.addEventListener("keypress",onKeyUp);    