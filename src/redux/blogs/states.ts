import {Blog} from '../../models/blog';

export interface BlogsState {
    blogs: Blog[];

    isFetchingAllBlogs: boolean;
    isFetchingAllBlogsSuccess: boolean;
    isFetchingAllBlogsFailure: boolean;

    error: string;
}

const initialBlogsState: BlogsState = {
    blogs: [],

    isFetchingAllBlogs: true,
    isFetchingAllBlogsSuccess: false,
    isFetchingAllBlogsFailure: false,

    error: '',
};

export default initialBlogsState;
