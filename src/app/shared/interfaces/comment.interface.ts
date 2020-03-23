export interface IComment {
  id: number;
  userId: number;
  text: string;
  movieId: number;
}
export interface ICommentOnMovie {
  id: number;
  value: string;
  user: {
    id: number;
    login: string;
  };
}
export interface ICommentToAdd {
  userId: number;
  movieId: number;
  value: string;
}
