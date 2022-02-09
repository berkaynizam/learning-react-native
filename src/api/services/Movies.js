import HTTPClient from '../HTTPClient';

import { MOVIE_API_KEY } from '@env';

export async function fetch(limit) {
    const { data } = await HTTPClient.get(`popular?api_key=${MOVIE_API_KEY}`);
    return await data.results;
}