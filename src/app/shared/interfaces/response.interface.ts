export interface IResponse<T = any> {
  status: number;
  content: T;
}
