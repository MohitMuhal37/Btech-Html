const items = document.querySelectorAll(".item");
const btn = document.getElementById("btn"); 
console.log(items);
items.forEach((item,index) => {
    item.style.color = "red";
    if(index === 0){
        item.innerText = "Rohan";
    }
});

// Create Element
const div = document.createElement("div");
// give id and class
div.id = "myDiv";
div.className = "myDivClass";
// add text to them
const text = document.createTextNode("Hello Mohit How Are You");
// append Child to div
div.appendChild(text);
// append Div to body
document.body.appendChild(div);

// adding nodes to our webpage
function createListItem(item)
{
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const text = document.createTextNode(item);
    li.appendChild(text);
    const test = ul.appendChild(li);
    console.log(test)
    document.body.appendChild(ul);
}
createListItem("hey");
createListItem("Mohit");
createListItem("Rohit");
createListItem("Rohit");