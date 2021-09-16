import {Blog} from '../../models/blog';
import {UserRole} from '../../models/user';

export interface BlogsState {
    blogs: Blog[];

    isFetchingAllBlogs: boolean;
    isFetchingAllBlogsSuccess: boolean;
    isFetchingAllBlogsFailure: boolean;

    blog: Blog;

    isFetchingBlog: boolean;
    isFetchingBlogSuccess: boolean;
    isFetchingBlogFailure: boolean;

    isDeletingBlog: boolean;
    isDeletingBlogSuccess: boolean;
    isDeletingBlogFailure: boolean;

    isCreatingBlog: boolean,
    isCreatingBlogSuccess: boolean,
    isCreatingBlogFailure: boolean,

    error: string;
}

const initialBlogsState: BlogsState = {
    blogs: [],

    isFetchingAllBlogs: true,
    isFetchingAllBlogsSuccess: false,
    isFetchingAllBlogsFailure: false,

    blog: {
        _id: '',
        title: '',
        article: '',
        imageUrl: '',
        createdBy: {
            _id: null,
            email: '',
            name: '',
            role: UserRole.CONTENT_WRITER,
        },
        createdAt: null,
    },

    isFetchingBlog: false,
    isFetchingBlogSuccess: false,
    isFetchingBlogFailure: false,

    isDeletingBlog: false,
    isDeletingBlogSuccess: false,
    isDeletingBlogFailure: false,

    isCreatingBlog: false,
    isCreatingBlogSuccess: false,
    isCreatingBlogFailure: false,

    error: '',
};

export default initialBlogsState;
