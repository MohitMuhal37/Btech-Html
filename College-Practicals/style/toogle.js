const head = document.getElementById("head");
const btn = document.getElementById("btn");
const body = document.querySelector("body");

const changeTheme = () => {

    if(body.style.background === "white"){
        body.style.background = "black";
        body.style.color = "white";
    }else{
        body.style.background = "white";
        body.style.color = "black";
    }
    if(btn.style.backgroundColor === "white")
    {
        btn.style.background = "black";
        btn.style.color = "white";
    }
    else
    {
        btn.style.background = "white";
        btn.style.color = "black";
    }
}

btn.addEventListener("click", changeTheme);