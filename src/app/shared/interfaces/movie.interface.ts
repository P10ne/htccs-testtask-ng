export interface IMovie {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  year: number;
  country: string;
  genre: string;
}

export interface IMovieToAdd {
  title: string;
  imgSrc: string;
  description: string;
  year: number;
  country: string;
  genre: string;
}

export interface IMovieToUpdate {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  year: number;
  country: string;
  genre: string;
}
