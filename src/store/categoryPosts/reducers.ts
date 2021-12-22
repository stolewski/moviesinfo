import { AnyAction } from 'redux';
import { IStore } from './types';

const initialState = {
  categoryPosts: [],
  loading: false,
};

const catReducer = (state: IStore = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'categoryPosts/loading':
      return { ...state, loading: true };
    case 'categoryPosts/setCategoryPosts':
      return {
        ...state,
        categoryPosts: [...action.payload],
        loading: false,
      };
    default:
      return state;
  }
};

export default catReducer;
