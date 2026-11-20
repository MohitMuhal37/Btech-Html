const global = {
    currentPage:window.location.pathname
};

// Highlight function Link
const highLight = () => {
    const moviesTv = document.querySelectorAll(".nav-link");
    moviesTv.forEach((val) => {
       if(val.getAttribute("href") === global.currentPage){
        val.classList.add("active");
       }
    });
}
const init = () => {
    switch(global.currentPage){
        case '/flixx-apps/index.html':
            console.log("HOME");
            break;
        case '/flixx-apps/shows.html':
            console.log("Shows");
            break;
        case '/flixx-apps/movie-details.html':
            console.log("Movie Details");
            break;    
        case '/flixx-apps/tv-details.html':
            console.log("Tv Details");
            break; 
        case '/flix-apps/search.html':
            console.log("search");
            break;      
    }
    highLight();
}
document.addEventListener("DOMContentLoaded",init);