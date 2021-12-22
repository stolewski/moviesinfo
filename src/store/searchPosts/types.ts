import { IPost } from 'types/IPost';

export interface IStore {
  searchPosts: IPost[];
  loading: boolean;
}
