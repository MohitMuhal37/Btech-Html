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
}

btn.addEventListener("click", changeTheme);