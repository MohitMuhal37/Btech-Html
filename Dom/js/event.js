const btn = document.querySelector(".btn");

const showAlert = () => {
    alert("Hello Mohit")
}

const logMsg = () => {
    console.log("Hello Mohit");
}
const colorChange = () => {
    btn.style.background = "pink"
    console.log(btn);
}
// btn.addEventListener("click",showAlert);
btn.addEventListener("click",logMsg);
btn.addEventListener("click",colorChange);