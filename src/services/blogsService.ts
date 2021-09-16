import * as config from '../config/api';
import {Blog} from '../models/blog';
import axios from './axios';

export interface IBlogService {
    getAllBlogs(): Promise<Blog[]>;
}

export class BlogService implements IBlogService {
    async getAllBlogs(): Promise<any> {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) throw new Error('Access token does not exists');
        const response = await axios.get(`${config.apiConfig.baseUrl}/v1/blogs`, {headers: {Authorization: accessToken}});
        return response.data;
    }

    async getBlogsByWriter(): Promise<any> {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) throw new Error('Access token does not exists');

        const response = await axios.get(`${config.apiConfig.baseUrl}/v1/blogsByWriter`, {headers: {Authorization: accessToken}});
        return response.data;
    }
}

export default new BlogService();
