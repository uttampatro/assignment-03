import * as config from '../config/api';
import {Blog} from '../models/blog';
import axios from './axios';

export interface CreateBlogDTO {
    title: string;
    article: string;
    imageUrl: string;
    userId: string;
}

export interface IBlogService {
    getAllBlogs(): Promise<Blog[]>;
    getBlogByBlogId(id: any): Promise<any[]>;
    deleteBlog(id: any): Promise<any>;
    createBlog(dto: CreateBlogDTO): Promise<any[]>;
}

export class BlogService implements IBlogService {
    async getAllBlogs(): Promise<any> {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) throw new Error('Access token does not exists');
        const response = await axios.get(`${config.apiConfig.baseUrl}/v1/blogs`, {headers: {Authorization: accessToken}});
        return response.data;
    }

    async getBlogByBlogId(id: any): Promise<any> {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) throw new Error('Access token does not exists');
        const response = await axios.get(`${config.apiConfig.baseUrl}/v1/blog/${id}`, {headers: {Authorization: accessToken}});
        return response.data;
    }

    async getBlogsByWriter(): Promise<any> {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) throw new Error('Access token does not exists');

        const response = await axios.get(`${config.apiConfig.baseUrl}/v1/blogsByWriter`, {headers: {Authorization: accessToken}});
        return response.data;
    }

    async deleteBlog(id: any): Promise<any> {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) throw new Error('Access token does not exists');
        const response = await axios.delete(`${config.apiConfig.baseUrl}/v1/blog/${id}`, {headers: {Authorization: accessToken}});
        return response.data;
    }
    async createBlog(dto: CreateBlogDTO): Promise<any> {
        const {title, article, imageUrl, userId} = dto;

        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) throw new Error('Access token does not exists');

        const response = await axios.post(
            `${config.apiConfig.baseUrl}/v1/createBlog`,
            {
                title: title,
                article: article,
                imageUrl: imageUrl,
                userId: userId,
            },
            {headers: {Authorization: accessToken}}
        );
        return response.data;
    }
}

export default new BlogService();
