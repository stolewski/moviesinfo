import { IPost } from 'types/IPost';

export interface IStore {
  mainPosts: IPost[];
  loading: boolean;
}
