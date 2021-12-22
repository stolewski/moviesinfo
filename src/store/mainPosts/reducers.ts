import { AnyAction } from 'redux';
import { IStore } from './types';

const initialState = {
  mainPosts: [],
  loading: false,
};

const mainReducer = (state: IStore = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'mainPosts/loading':
      return { ...state, loading: true };
    case 'mainPosts/setMainPosts':
      return {
        ...state,
        mainPosts: [...action.payload],
        loading: false,
      };
    default:
      return state;
  }
};

export default mainReducer;
