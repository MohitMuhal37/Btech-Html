const head = document.getElementById("head");
console.log(head)

// set Attribute
// head.setAttribute("id","max");

head.textContent = "Hello Selectors"
head.innerText = "Hello"
head.innerHTML = '<h4>Hello Again</h4>'

head.style.backgroundColor = "blue"
head.style.color = "white"

const listItem = document.querySelectorAll(".items")
console.log(listItem)
listItem.forEach((item,index)=>{
        if(index === 1){
            item.style.color = "blue";
        }else{
            item.remove()
        }
})