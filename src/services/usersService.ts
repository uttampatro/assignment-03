import * as config from '../config/api';
import axios from './axios';

export interface IUsersService {
    fetchAllUsers(): Promise<any[]>;
}

export class UsersService implements IUsersService {
    async fetchAllUsers(): Promise<any[]> {
        const response = await axios.get(`${config.apiConfig.baseUrl}/v1/users`);
        console.log(response.data);
        return response.data;
    }
}

export default new UsersService();
