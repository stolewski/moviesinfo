import { Dispatch } from 'redux';
import getDetail from 'services/getDetail';
import { IStore } from './types';

export const setDetailMovieAction = (detailMovie: IStore['detailMovie']) => {
  return {
    type: 'detailMovie/setDetailMovie',
    payload: detailMovie,
  };
};

export const loadDetailMovie = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: 'detailMovie/loading' });
    const { data } = await getDetail(id);
    dispatch(setDetailMovieAction(data));
  } catch (e) {
    console.log(e, 'error in detail');
  }
};
