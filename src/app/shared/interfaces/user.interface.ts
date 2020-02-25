export enum Role {
  admin,
  user
}

export interface IUser {
  id: number;
  login: string;
  role: Role;
}
