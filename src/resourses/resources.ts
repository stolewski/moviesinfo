import axios from 'axios';
import { IPost } from 'types/IPost';

export const useResource = () => {
  return {
    categoryPosts: wrapPromise(fetchCatPosts()),
  };
};

const wrapPromise = (promise: Promise<any>) => {
  let status = 'pending';
  let result: IPost[];
  const suspender = promise.then(
    r => {
      result = r;
      status = 'success';
    },
    e => {
      result = e;
      status = 'error';
    }
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
};

const fetchCatPosts = async () => {
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=crazy');
  return await res.data;
};
