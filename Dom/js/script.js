const parent = document.querySelector(".parent");
let output;
// output = parent.childNodes[0].nodeName;
// output = parent.childNodes[1].textContent = "Hello I am First";
// output = parent.childNodes[1].style.color = "green";

const child = document.querySelector(".child");
output = child.parentNode.style.background = "#ccc";

console.log(output);