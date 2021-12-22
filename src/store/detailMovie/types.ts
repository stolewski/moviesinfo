import { IShow } from 'types/IPost';

export interface IStore {
  detailMovie: IShow | null;
  loading: boolean;
}
