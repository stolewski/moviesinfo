import axios, { AxiosResponse } from 'axios';

const getDetail = (id: string): Promise<AxiosResponse> => {
  return axios.get(`https://api.tvmaze.com/shows/${id}`);
};

export default getDetail;
