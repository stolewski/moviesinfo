import axios, { AxiosResponse } from 'axios';

const getCategory = (cat: string): Promise<AxiosResponse> =>
  axios.get(`https://api.tvmaze.com/search/shows?q=${cat}`);

export default getCategory;
