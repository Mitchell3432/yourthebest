const apiKey = '980796479e844bb4da4b1197b5782f22';
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

async function getRandomMovie() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const movies = data.results;
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    displayMovie(randomMovie);
  } catch (error) {
    console.error('Error fetching movie:', error);
  }
}

function displayMovie(movie) {
  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'default_poster.jpg';

  document.getElementById('moviePoster').src = posterUrl;
  document.getElementById('movieTitle').textContent = movie.title;
  document.getElementById('movieOverview').textContent = movie.overview;

  document.getElementById('movieDisplay').classList.remove('hidden'); // Show the movie display section
}

document.getElementById('findMovieButton').addEventListener('click', getRandomMovie);
