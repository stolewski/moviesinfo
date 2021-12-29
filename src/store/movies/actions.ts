import getMain from 'services/getMain';
import getDetail from 'services/getDetail';
import getSearch from 'services/getSearch';
import getCategory from 'services/getCategory';
import { IStore } from 'store/movies/types';
import { Dispatch } from 'redux';

export const setMainPostsAction = (mainPosts: IStore['mainPosts']) => {
  return {
    type: 'mainPosts/setMainPosts',
    payload: mainPosts,
  };
};

export const loadMainPosts = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: 'movies/loading' });
    const { data } = await getMain();
    dispatch(setMainPostsAction(data));
  } catch (e) {
    console.log(e, 'error in main');
  }
};

export const setDetailMovieAction = (detailMovie: IStore['detailMovie']) => {
  return {
    type: 'detailMovie/setDetailMovie',
    payload: detailMovie,
  };
};

export const loadDetailMovie = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: 'movies/loading' });
    const { data } = await getDetail(id);
    dispatch(setDetailMovieAction(data));
  } catch (e) {
    console.log(e, 'error in detail');
  }
};

export const getSearchPostsAction = (searchPosts: IStore['searchPosts']) => {
  return {
    type: 'searchPosts/getSearchPosts',
    payload: searchPosts,
  };
};

export const loadSearchPosts =
  (query: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: 'movies/loading' });
      const { data } = await getSearch(query);
      dispatch(getSearchPostsAction(data));
    } catch (e) {
      console.log(e, 'error search');
    }
  };

export const setCategoryPostsAction = (
  categoryPosts: IStore['categoryPosts']
) => {
  return {
    type: 'categoryPosts/setCategoryPosts',
    payload: categoryPosts,
  };
};

export const loadCategoryPosts =
  (cat: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: 'movies/loading' });
      const { data } = await getCategory(cat);
      dispatch(setCategoryPostsAction(data));
    } catch (e) {
      console.log(e, 'error occured');
    }
  };
