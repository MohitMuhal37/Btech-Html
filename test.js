// get child from parent
const parent = document.querySelector(".items");
let output;
output = parent;
output = parent.children[1].innerText
parent.children[1].innerText = "childthree"
console.log(output);
