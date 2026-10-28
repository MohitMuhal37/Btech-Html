const promise = new Promise((resolve, reject) => {
  let value = false;
  setTimeout(() => {
    if (value) {
      resolve({ name: "Mohit", age: 23 });
    }
    reject("Not Working");
  }, 3000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });