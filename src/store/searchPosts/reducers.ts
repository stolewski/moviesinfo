import { AnyAction } from 'redux';
import { IStore } from './types';

const initialState = {
  searchPosts: [],
  loading: false,
};

const searchReducer = (state: IStore = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'searchPosts/loading':
      return { ...state, loading: true };
    case 'searchPosts/getSearchPosts':
      return { ...state, searchPosts: [...action.payload], loading: false };
    default:
      return state;
  }
};

export default searchReducer;
