const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjNmOGY1NzJmZGUwYjI2MmZhOTdhMjJkODI0NmJlOSIsInN1YiI6IjY1ZjI5ZGIzMDZmOTg0MDE2MjQ0NTg3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZuPoNo64FAs1_l_0MpS1CoDy6qv6Q8nWAUhrJSWCKS4'
  }
};

const getGenres = async () => {
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
    const genres = await response.json();
    return genres.genres;
}

const getMoviesByGenre = async (genreId: string) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=en-US`, options);
    const movies = await response.json();
    return movies.results;
}

export { getGenres, getMoviesByGenre };