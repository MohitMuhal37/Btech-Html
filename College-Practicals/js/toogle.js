const head = document.getElementById("head");
const btn = document.getElementById("btn");
const body = document.querySelector("body");

const changeTheme = () => {
     const body = document.body;
let theme = body.style.backgroundColor = "white";
    if(body.style.background === "white"){
        body.style.background = "black";
        body.style.color = "white";
        localStorage.setItem("theme","light")
    }else{
        body.style.background = "white";
        body.style.color = "black";
        localStorage.setItem("theme","dark");
    }
    // if(btn.style.backgroundColor === "white")
    // {
    //     btn.style.background = "black";
    //     btn.style.color = "white";

    // }
    // else
    // {
    //     btn.style.background = "white";
    //     btn.style.color = "black";

    // }
}
btn.addEventListener("click", changeTheme);
    window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem("theme");
    const body = document.body;

    if (savedTheme === "dark") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});
