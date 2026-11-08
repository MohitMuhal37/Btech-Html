const ul = document.querySelector("ul");
console.log(ul)
let output = ul.children[0];
output.style.color = "brown"
ul.lastElementChild.innerHTML = '<h1>hello i am Last child</h1>'
ul.firstElementChild.innerHTML = '<h1>Hi iam first</h1>'
const second = document.querySelector(".items:nth-child(2)");
second.innerText = "Hi am Second Child"
second.style.border = "1px solid #333"
console.log(output)