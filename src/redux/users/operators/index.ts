import { UserRole } from '../../../models/user';
import { createUser } from './createUser';
import { deleteUser } from './deleteUser';
import {getAllUsers} from './getAllUser';
import {getProfileDetails} from './getProfileDetails';
import {login} from './login';
import {logout} from './logout';

export interface IUserOperators {
    getProfileDetails(): void;
    login(email: string, password: string): void;
    createUser(name: string, email: string, password: string, role: UserRole): void
    logout(): void;
    getAllUsers(): void;
    deleteUser(): void;
}

export {getProfileDetails, getAllUsers, login, logout, deleteUser, createUser};
