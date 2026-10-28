const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let value = false;
    if (value) {
      resolve({ name: "Max", age: 32 });
    } else {
      reject("There is an Error:404");
    }
  }, 3000);
});

promise
  .then((user) => {
    console.log(user);
    return user.name;
  }).then((uName) => {
        console.log(uName);
        return uName.length;
  }).then((uLength) => {
    console.log(uLength)
  })
  .catch((error) => {
    console.log(error);
  })
  .then(() => {
    console.log("This will run");
  });
