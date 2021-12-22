import { IStore } from './types';

export const selectDetailMovie = (state: {
  detailReducer: IStore;
}): IStore['detailMovie'] => state.detailReducer.detailMovie;

export const selectLoading = (state: {
  detailReducer: IStore;
}): IStore['loading'] => state.detailReducer.loading;
