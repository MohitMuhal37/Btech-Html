// const btn = document.querySelector(".btn");

// const showAlert = () => {
//     alert("Hello Mohit")
// }

// const logMsg = () => {
//     console.log("Hello Mohit");
// }
// const colorChange = () => {
//     btn.style.background = "pink"
//     console.log(btn);
// }
// // btn.addEventListener("click",showAlert);
// btn.addEventListener("click",logMsg);
// btn.addEventListener("click",colorChange);

// // MouseEvents
// const logo = document.querySelector(".img");
// const onClick = () => console.log("hy Mohit");
// const onDblClick = () => console.log("hey Mohit");

// logo.addEventListener("click",onClick);
// logo.addEventListener("dblclick",onDblClick);
// logo.addEventListener("mouseover",onDblClick);
// logo.addEventListener("contextmenu",onDblClick);

// EVENT OBJECT
const logo = document.querySelector("img");
const onClick = (e) => {
    /* target = the element that triggered the event
       currentTarget = the element that event listener is attached to
    */
    // console.log(e.target);
    // console.log(e.currentTarget);
    // console.log(e.type);
    // console.log(e.timeStamp);
    //  console.log(e.clientX);
    //  console.log(e.clientY);
    //  console.log(e.offsetX);
    //  console.log(e.offsetY);
    //  console.log(e.pageX);
    //  console.log(e.pageY);
     console.log(e.screenX);
     console.log(e.screenY);
    e.target.style.border = "5px solid black";
}

const onDrag = (e) => {
    document.querySelector("h1").textContent = `X ${e.clientX} Y ${e.clientY}`;
}

logo.addEventListener("click",onClick)
logo.addEventListener("drag",onDrag)