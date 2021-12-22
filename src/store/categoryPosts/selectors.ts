import { IStore } from './types';

export const selectCategoryPosts = (state: {
  catReducer: IStore;
}): IStore['categoryPosts'] => state.catReducer.categoryPosts;

export const selectLoading = (state: { catReducer: IStore }) =>
  state.catReducer.loading;
