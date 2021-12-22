import axios, { AxiosResponse } from 'axios';

const getSearch = (query: string): Promise<AxiosResponse> =>
  axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);

export default getSearch;
