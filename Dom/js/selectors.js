// query Selector usage
const items = document.querySelectorAll(".item");
const btn = document.getElementById("btn"); 
console.log(items);
items.forEach((item,index) => {
    item.style.color = "red";
    if(index === 0){
        item.innerText = "Rohan";
    }
});
