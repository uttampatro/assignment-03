import * as config from '../config/api';
import {UserRole} from '../models/user';
import axios from './axios';

export interface IAuthService {
    registerUser(name: string, email: string, password: string, role: UserRole): Promise<any>;
    login(email: string, password: string): Promise<any>;
    logout(): Promise<void>;
}

export class AuthService implements IAuthService {
    async registerUser(name: string, email: string, password: string, role: UserRole): Promise<any> {
        const response = await axios.post(`${config.apiConfig.baseUrl}/v1/register`, {
            name,
            email,
            password,
            role,
        });
        if (response.data) {
            localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken));
        }
        return response.data;
    }

    async login(email: string, password: string): Promise<any> {
        const response = await axios.post(`${config.apiConfig.baseUrl}/v1/login`, {
            email,
            password,
        });
        if (response.data) {
            localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken));
        }
        return response.data;
    }

    async logout(): Promise<void> {
        try {
            localStorage.clear();
        } catch (err) {
            console.log(err);
        }
    }
}

export default new AuthService();
