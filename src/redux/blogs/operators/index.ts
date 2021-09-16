import {createBlog} from './createBlog';
import {deleteBlog} from './deleteBlog';
import {getAllBlogs} from './getAllBlogs';
import {getBlogDetails} from './getBlogDetails';

export interface IUserOperators {
    getAllBlogs(): void;
    getBlogDetails(id: any): void;
    deleteBlog(id: any): void;
    createBlog(title: string, article: string, imageUrl: string, userId: string): void;
}

export {getAllBlogs, getBlogDetails, deleteBlog, createBlog};
