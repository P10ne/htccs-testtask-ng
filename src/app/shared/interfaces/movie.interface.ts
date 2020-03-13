export interface IMovie {
  id: number;
  title: string;
  preview: string;
  description: string;
  year: number;
  country: string;
  genre: string;
}

export interface IMovieToAdd {
  title: string;
  description: string;
  year: number;
  country: string;
  genre: string;
  preview: File;
}

export interface IMovieToUpdate {
  id: number;
  title: string;
  description: string;
  year: number;
  country: string;
  genre: string;
  preview: File;
}
