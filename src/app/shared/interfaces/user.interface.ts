export enum Role {
  admin,
  user
}

export interface IUser {
  id: number;
  login: string;
  password?: string;
  role: Role;
}
