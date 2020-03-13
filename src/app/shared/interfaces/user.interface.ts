import {IRole} from './role.interface';
import {IAccessToken} from '../services/auth/auth.service';

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
export interface IToLogin {
  login: string;
  password: string;
  fingerPrint: string;
}
export interface IRefreshTokens {
  refreshToken: string;
  fingerPrint: string;
}
