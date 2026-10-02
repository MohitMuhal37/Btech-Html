const title = document.getElementById("mat");
title.textContent = "Max";
title.innerText = "Hello Again";
title.innerHTML = '<strong>Hi Mohit<strong/>';

//change-color
title.style.color = "#feaeae";
title.style.backgroundColor = "#ae6a61";
title.style.padding = "20px 0px 20px 0px";
title.style.borderRadius = "15px";
title.style.textAlign = "center";

const response = {
  status: 200,
  statusText: "OK"
};

// promise creation

const promise = new Promise((resolve, reject)=> {
        setTimeout(() => {
            let value = true;
            if(value)
            {
                resolve({name: "Mohit",age:22})
            }else{
                reject(`There is an error Occured because of ${value} value.`)
            }
        },2000);
})
// promise.then((user) => console.log(`Name of Candidate is ${user.name} & his age is ${user.age}`))
//   .catch((error) => console.log(error))

//promise chaining
function wait(milliseconds){
    return new Promise((res) => setTimeout(res),milliseconds );
}

const promises = wait(5000)
                 .then(()=> console.log("hey Mohit")
                 ,wait(3000))
                 .then(()=> console.log("hey Rohit"),wait(1000))
                 .then(()=> console.log("hey Ohit"),wait(500))

// Promise in parallel
function resolve(value, milliseconds)
{
    return new Promise(resolve => setTimeout(() => resolve(value),milliseconds));
}

function reject(reson, milliseconds)
{
    return new Promise((_,reject) => setTimeout(() => reject(reson),milliseconds));
}

Promise.all([
    resolve(1,1000),
    resolve(2,2000),
    resolve(3,4000),
    resolve(4,5000),
]).then((values) => console.log(values))
Promise.all([
    resolve(1,6000),
    reject('Error',2000),
    resolve(3,4000),
    resolve(4,5000),
]).then((values) => console.log(values))
.catch(reson => console.log(reson))


// Promise all settled
function res(val,milliseconds)
{
    return new Promise(res => setTimeout(()=>{res(val),milliseconds}));
}
function rej(err,milliseconds)
{
    return new Promise((_,rej) => setTimeout(()=>{rej(err),milliseconds}));
}
Promise.allSettled([
    res(1,2000),
    res(2,2000),
    res(3,2000)
]).then((value) => console.log(value))
Promise.allSettled([
    res(1,2000),
    rej('Error',2000),
    res(3,2000)
]).then((value) => console.log(value))
.catch(err=>console.log(err));

function wait2Second()
{
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve("calling");
        },2000)
    })
}
async function asyncCall() {
  console.log("falling");
  const result = await wait2Second();
  console.log(result);
  // Expected output: "resolved"
}
asyncCall()