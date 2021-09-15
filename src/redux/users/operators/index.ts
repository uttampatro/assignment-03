import {getProfileDetails} from './getProfileDetails';
import {login} from './login';
import {logout} from './logout';

export interface IUserOperators {
    getProfileDetails(): void;
    login(authDto: {email: string; password: string}): void;
    logout(): void;
}

export {getProfileDetails, login, logout};
