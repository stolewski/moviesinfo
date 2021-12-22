import axios, { AxiosResponse } from 'axios';

const getMain = (): Promise<AxiosResponse> =>
  axios.get('https://api.tvmaze.com/search/shows?q=cats');

export default getMain;
