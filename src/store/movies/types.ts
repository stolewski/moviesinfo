import { IPost, IShow } from 'types/IPost';

export interface IStore {
  loading: boolean;
  mainPosts: IPost[];
  detailMovie: IShow | null;
  searchPosts: IPost[];
  categoryPosts: IPost[];
}
