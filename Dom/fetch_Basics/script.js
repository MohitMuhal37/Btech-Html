fetch("./movies.json")
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data)
    })