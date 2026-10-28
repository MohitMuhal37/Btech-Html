const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            let value = false;
            if(!value){
              resolve({name:"Max",age:32})
            }reject("Condition is false");
          },3000)
})

promise.then((user) => {
  console.log(user)
}).catch((error) => {
    console.log(error)
})