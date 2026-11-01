const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let value = false;
    if (!value) {
      resolve({ name: "Max", age: 32 });
    } else {
      reject("There is an Error:404");
    }
  }, 3000);
});

// promise.then((user) => {
//   console.log(user);
// })
// .catch((err) => {
//   console.log(err)
// });
