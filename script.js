const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '7fe5fb283cmshf74d6692d8deee5p1feac1jsn482e91d07d51',
        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    }
};

// Function to fetch movies and display them
async function fetchMovies() {
    try {
        const response = await fetch(url, options);
        const movies = await response.json();
        displayMovies(movies);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

function displayMovies(movies) {
    const movieListings = document.getElementById('movie-listings');
    movieListings.innerHTML = ''; // Clear previous listings

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        movieElement.innerHTML = `
            <h3>${movie.title}</h3>
            <p><strong>Year:</strong> ${movie.year}</p>
            <img src="${movie.image}" alt="${movie.title}" width="100"/>
              <a href="${movie.trailer}" target="_blank">Trailer</a>
            <p><strong>Rank:</strong> ${movie.rank}</p>
            <p><strong>Rank:</strong> ${movie.genre}</p>
            <p><strong>Description:</strong> ${movie.description.slice(0, 100)}...</p>
                <p><strong>Rating:</strong> ${movie.rating}</p>

                 <a href="${movie.imdb_link}" target="_blank">Watch Now </a>
        `;

        movieListings.appendChild(movieElement);
    });
}

// Fetch the movies when the page loads
fetchMovies();
