const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjNmOGY1NzJmZGUwYjI2MmZhOTdhMjJkODI0NmJlOSIsInN1YiI6IjY1ZjI5ZGIzMDZmOTg0MDE2MjQ0NTg3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZuPoNo64FAs1_l_0MpS1CoDy6qv6Q8nWAUhrJSWCKS4'
    }
  };

const topRated = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
    const topRatedMovies = await response.json();
    return topRatedMovies.results;
}

export default topRated;