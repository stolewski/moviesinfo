import { Dispatch } from 'redux';
import getSearch from 'services/getSearch';
import { IStore } from './types';

export const getSearchPostsAction = (searchPosts: IStore['searchPosts']) => {
  return {
    type: 'searchPosts/getSearchPosts',
    payload: searchPosts,
  };
};

export const loadSearchPosts =
  (query: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: 'searchPosts/loading' });
      const { data } = await getSearch(query);
      dispatch(getSearchPostsAction(data));
    } catch (e) {
      console.log(e, 'error search');
    }
  };
