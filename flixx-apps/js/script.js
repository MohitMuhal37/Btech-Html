const global = {
    currentPage:window.location.pathname
};

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
    }
}
document.addEventListener("DOMContentLoaded",init);