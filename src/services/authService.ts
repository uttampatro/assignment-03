import * as config from '../config/api';
import {UserRole} from '../models/user';
import axios from './axios';

export interface IUserService {
    registerUser(name: string, email: string, password: string, role: UserRole): Promise<any>;
    login(email: string, password: string): Promise<any>;
    logout(): Promise<void>;
}

export class UserService implements IUserService {
    async registerUser(name: string, email: string, password: string, role: UserRole): Promise<any> {
        try {
            //ste1: save response of github user in our db
            // const { username, email, password } = dto;
            const response = await axios.post(`${config.apiConfig.baseUrl}/v1/register`, {
                name,
                email,
                password,
                role,
            });
            //step2: save user in localStorage
            if (response.data) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
    async login(email: string, password: string): Promise<any> {
        try {
            //ste1: save response of github user in our db
            // const { email, password } = dto;

            const response = await axios.post(`${config.apiConfig.baseUrl}/v1/login`, {
                email,
                password,
            });
            //step2: save user in localStorage
            // if (response.data) {
            //     localStorage.setItem('user', JSON.stringify(response.data));
            // }
            console.log(response);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
    async logout(): Promise<void> {
        try {
            localStorage.clear();
        } catch (err) {
            console.log(err);
        }
    }
}

export default new UserService();
