import { IStore } from './types';

export const selectSearchPosts = (state: {
  searchReducer: IStore;
}): IStore['searchPosts'] => state.searchReducer.searchPosts;

export const selectLoading = (state: {
  searchReducer: IStore;
}): IStore['loading'] => state.searchReducer.loading;
