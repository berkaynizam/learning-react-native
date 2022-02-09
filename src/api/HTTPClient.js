import Axios from 'axios';

let baseURL = 'https://api.themoviedb.org/3/movie/';

const client = Axios.create({
    baseURL,
    headers: {
        Accept: 'application/json, text/plain, */*',
        // Authorization: `TOKEN ${TOKEN}`,
    },
});

export default client