function getdata(endpoint,cb){
    const xhr = new XMLHttpRequest();
    xhr.open("GET",endpoint);

    xhr.onreadystatechange = function () {
        if((this.readyState === 4) & (this.status === 200)){
            cb(JSON.parse(this.responseText))
        }
    }
    setTimeout(() => {
        xhr.send();
    },Math.floor(Math.random()*3000)+1000);
}

getdata('./movies.json',(data) => {
    console.log(data);
    getdata('./actors.json',(data) => {
        console.log(data)
    });
    getdata('./directors.json',(data)=>{
        console.log(data)
    })
})