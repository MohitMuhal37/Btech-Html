const input = document.getElementById("inp");
const btn =   document.getElementById("btn");
const para =  document.getElementById("para");
const body =  document.querySelector("body");

const fetchValue = () => {
    const num = input.value;
    if(num %2 ==0)
        {
           para.innerText = "it's is even num"
           para.style.background = "#ffd6d6";
            para.style.color = "#f3f3f3";
            para.style.fontSize = "24px"; 
        }else{
             para.innerText = "it's is odd num" 
             para.style.background = "#a3a3a3";
            para.style.color = "#f3f3f3";
            para.style.fontSize = "24px"; 
        } 

    if(body.style.background === "white")
    {
        body.style.background = "black"
        body.style.color = "white"
    }
    else
    {
        body.style.background = "white"
        body.style.color = "black"
    }
}

const changeTheme = () => {
    para.style.background = "orange"
}


btn.addEventListener("click",fetchValue);
btn.addEventListener("click",changeTheme);
