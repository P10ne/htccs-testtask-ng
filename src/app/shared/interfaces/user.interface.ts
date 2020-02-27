import {IRole} from './role.interface';

export interface IUser {
  id: number;
  login: string;
  password?: string;
  role: IRole;
}
export interface IUserToAdd {
  login: string;
  password: string;
  roleId: number;
}
export interface IUserToUpdate {
  id: number;
  login?: string;
  password?: string;
  roleId?: number;
}
