import getCategory from 'services/getCategory';
import { Dispatch } from 'redux';
import { IStore } from './types';

export const setCategoryPostsAction = (
  categoryPosts: IStore['categoryPosts']
) => {
  return {
    type: 'categoryPosts/setCategoryPosts',
    payload: categoryPosts,
  };
};

export const loadCategoryPosts = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: 'categoryPosts/loading' });
    const { data } = await getCategory();
    dispatch(setCategoryPostsAction(data));
  } catch (e) {
    console.log(e, 'error occured');
  }
};
