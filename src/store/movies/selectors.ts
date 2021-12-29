import { IStore } from './types';

export const selectLoading = (state: IStore) => state.loading;
export const selectMainPosts = (state: IStore) => state.mainPosts;
export const selectCategoryPosts = (state: IStore): IStore['categoryPosts'] =>
  state.categoryPosts;
export const selectDetailMovie = (state: IStore): IStore['detailMovie'] =>
  state.detailMovie;
export const selectSearchPosts = (state: IStore): IStore['searchPosts'] =>
  state.searchPosts;
