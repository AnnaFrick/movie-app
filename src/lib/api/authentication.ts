const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.AUTH_ACCESS_TOKEN}`
    }
  };

const authenticate = async () => {
    const response = await fetch('https://api.themoviedb.org/3/authentication', options);
    const json = await response.json();
    return json;
}

export default authenticate;