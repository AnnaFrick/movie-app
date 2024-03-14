const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjNmOGY1NzJmZGUwYjI2MmZhOTdhMjJkODI0NmJlOSIsInN1YiI6IjY1ZjI5ZGIzMDZmOTg0MDE2MjQ0NTg3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZuPoNo64FAs1_l_0MpS1CoDy6qv6Q8nWAUhrJSWCKS4'
    }
  };

  const search = async (query: string) => {
    console.log(query, "Hello from search");
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
    const searchResults = await response.json();    
    console.log(searchResults, "Hello from search");
    return searchResults.results;

}

export default search;