fetch("./movies.json")
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data)
    })


//Fetching from an Api
fetch("https://api.github.com/users/mohitmuhal37")
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        document.querySelector("h1").textContent = data.login;
    })