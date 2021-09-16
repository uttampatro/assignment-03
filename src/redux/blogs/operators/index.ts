import { deleteBlog } from './deleteBlog';
import {getAllBlogs} from './getAllBlogs';
import {getBlogDetails} from './getBlogDetails';

export interface IUserOperators {
    getAllBlogs(): void;
    getBlogDetails(id: any): void;
    deleteBlog(id: any) : void
}

export {getAllBlogs, getBlogDetails, deleteBlog};
