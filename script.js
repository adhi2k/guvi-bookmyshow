async function () {
    try{
        const response = await fetch("http://localhost:4000/movie/get—movie")
        const movies = await response.json()
        const movieCardContainer = document.getElementById("movieCards")
        
    }
    
}