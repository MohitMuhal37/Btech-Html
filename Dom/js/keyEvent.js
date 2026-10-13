const itemInput = document.getElementById("item");
console.log(itemInput);

const onKeyPress = e => console.log("keypress");
const onKeyUp = e => console.log("keyUp");
const onKeyDown = (e) => {
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.code);
    if(e.repeat)
    {
        console.log("you are holding down "+e.key);
    }
}
// itemInput.addEventListener("keypress",onKeyPress);    
// itemInput.addEventListener("keyup",onKeyUp);    
itemInput.addEventListener("keydown",onKeyDown);    