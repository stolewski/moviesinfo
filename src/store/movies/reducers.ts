import { AnyAction } from 'redux';
import { IStore } from './types';

const initialState = {
  loading: false,
  mainPosts: [],
  detailMovie: null,
  searchPosts: [],
  categoryPosts: [],
};

const mainReducer = (state: IStore = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'movies/loading':
      return { ...state, loading: true };
    case 'mainPosts/setMainPosts':
      return {
        ...state,
        mainPosts: [...action.payload],
        loading: false,
      };
    case 'categoryPosts/setCategoryPosts':
      return {
        ...state,
        categoryPosts: [...action.payload],
        loading: false,
      };
    case 'detailMovie/setDetailMovie':
      return { ...state, detailMovie: { ...action.payload }, loading: false };
    case 'searchPosts/getSearchPosts':
      return { ...state, searchPosts: [...action.payload], loading: false };
    default:
      return state;
  }
};

export default mainReducer;
