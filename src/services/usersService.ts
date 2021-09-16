import * as config from '../config/api';
import {User} from '../models/user';
import axios from './axios';

export interface IUsersService {
    fetchAllUsers(): Promise<any[]>;
    getUserProfileInfo(): Promise<User>;
    deleteUser(id: any): Promise<any>;
}

export class UsersService implements IUsersService {
    async fetchAllUsers(): Promise<any[]> {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) throw new Error('Access token does not exists');

        const response = await axios.get(`${config.apiConfig.baseUrl}/v1/users`, {headers: {Authorization: accessToken}});
        return response.data;
    }

    async getUserProfileInfo(): Promise<User> {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) throw new Error('Access token does not exists');

        const response = await axios.get(`${config.apiConfig.baseUrl}/v1/user/me`, {headers: {Authorization: accessToken}});
        return response.data;
    }

    async deleteUser(id: any): Promise<any> {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) throw new Error('Access token does not exists');
        const response = await axios.delete(`${config.apiConfig.baseUrl}/v1/user/${id}`, {headers: {Authorization: accessToken}});
        return response.data;
    }
}

export default new UsersService();
