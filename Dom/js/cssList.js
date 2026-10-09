const para = document.querySelector("p");
const text = document.querySelector(".items");
const item = text.querySelectorAll("li");
const btn = document.querySelector(".btn");

const run = () => {
    //className
    // para.className = "dark";
    
    // classList
    console.log(text.classList);
    text.classList.forEach((c) => console.log(c)
    )
    text.classList.toggle("card");
    para.classList.toggle("dark");
}
btn.addEventListener("click",run);