import { IStore } from './types';
import { AnyAction } from 'redux';

const initialState = {
  detailMovie: null,
  loading: false,
};

const detailReducer = (state: IStore = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'detailMovie/loading':
      return { ...state, loading: true };
    case 'detailMovie/setDetailMovie':
      return { ...state, detailMovie: { ...action.payload }, loading: false };
    default:
      return state;
  }
};

export default detailReducer;
