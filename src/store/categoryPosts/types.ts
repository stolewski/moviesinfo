import { IPost } from 'types/IPost';

export interface IStore {
  categoryPosts: IPost[];
  loading: boolean;
}
