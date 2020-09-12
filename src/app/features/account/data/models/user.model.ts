import { User } from './../../domain/entities/user';
export interface UserModel extends User {
  age: number;
}
