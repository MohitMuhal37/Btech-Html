const head = document.getElementById("head");
const btn = document.getElementById("btn");
const body = document.querySelector("body");

const changeTheme = () => {

    if(body.style.background === "white"){
        body.style.background = "black";
        body.style.color = "white";
         localStorage.setItem("backColor","max");
    }else{
        body.style.background = "white";
        body.style.color = "black";
         localStorage.setItem("backColor","body.style.background = black");
    }
    if(btn.style.backgroundColor === "white")
    {
        btn.style.background = "black";
        btn.style.color = "white";
         localStorage.setItem("backColor","body.style.background = white");
    }
    else
    {
        btn.style.background = "white";
        btn.style.color = "black";
        localStorage.setItem("backColor","body.style.background = white");
    }
}
btn.addEventListener("click", changeTheme);