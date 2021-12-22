import getMain from 'services/getMain';
import { IStore } from 'store/mainPosts/types';
import { Dispatch } from 'redux';

export const setMainPostsAction = (mainPosts: IStore['mainPosts']) => {
  return {
    type: 'mainPosts/setMainPosts',
    payload: mainPosts,
  };
};

export const loadMainPosts = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: 'mainPosts/loading' });
    const { data } = await getMain();
    dispatch(setMainPostsAction(data));
  } catch (e) {
    console.log(e, 'error in main');
  }
};
