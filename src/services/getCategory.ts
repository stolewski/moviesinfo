import axios, { AxiosResponse } from 'axios';

const getCategory = (): Promise<AxiosResponse> =>
  axios.get('https://api.tvmaze.com/search/shows?q=crazy');

export default getCategory;
