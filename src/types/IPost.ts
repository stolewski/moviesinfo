export interface IPost {
  score: number;
  show: IShow;
}

export interface IShow {
  id: number;
  premiered: string;
  name: string;
  genres: string[];
  rating: IRating;
  image: Iimage;
  network: INetwork;
  summary: string;
  language: string;
}

interface IRating {
  average: number;
}

interface INetwork {
  country: ICountry;
}

interface ICountry {
  name: string;
}

interface Iimage {
  medium: string;
  original: string;
}
