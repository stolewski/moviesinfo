import { IStore } from './types';

export const selectMainPosts = (state: {
  mainReducer: IStore;
}): IStore['mainPosts'] => state.mainReducer.mainPosts;

export const selectLoading = (state: {
  mainReducer: IStore;
}): IStore['loading'] => state.mainReducer.loading;
