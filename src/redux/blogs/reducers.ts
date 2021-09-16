import {actions} from '.';
import {BlogsAction} from './actionCreators';
import initialBlogsState, {BlogsState} from './states';

function users(state: BlogsState = initialBlogsState, action: BlogsAction): BlogsState {
    switch (action.type as actions.BlogsActionType) {
        case actions.GETTING_ALL_BLOGS:
            return {
                ...state,
                isFetchingAllBlogs: true,
                isFetchingAllBlogsSuccess: false,
                isFetchingAllBlogsFailure: false,
            };
        case actions.GETTING_ALL_BLOGS_SUCCESS:
            return {
                ...state,
                isFetchingAllBlogs: false,
                isFetchingAllBlogsSuccess: true,
                isFetchingAllBlogsFailure: false,
                blogs: action.blogs,
            };
        case actions.GETTING_ALL_BLOGS_FAILURE:
            return {
                ...state,
                isFetchingAllBlogs: false,
                isFetchingAllBlogsSuccess: false,
                isFetchingAllBlogsFailure: true,
                error: action.error,
            };
        case actions.GETTING_BLOG_DETAILS:
            return {
                ...state,
                isFetchingBlog: true,
                isFetchingBlogSuccess: false,
                isFetchingBlogFailure: false,
            };
        case actions.GETTING_ALL_BLOGS_SUCCESS:
            return {
                ...state,
                isFetchingBlog: false,
                isFetchingBlogSuccess: true,
                isFetchingBlogFailure: false,
                blog: {...state.blog, ...action.blog},
            };
        case actions.GETTING_BLOG_DETAILS_FAILURE:
            return {
                ...state,
                isFetchingBlog: false,
                isFetchingBlogSuccess: false,
                isFetchingBlogFailure: true,
                error: action.error,
            };
        case actions.DELETING_BLOG:
            return {
                ...state,
                isDeletingBlog: true,
                isDeletingBlogSuccess: false,
                isDeletingBlogFailure: false,
            };
        case actions.DELETING_BLOG_SUCCESS:
            return {
                ...state,
                isDeletingBlog: false,
                isDeletingBlogSuccess: true,
                isDeletingBlogFailure: false,
            };
        case actions.DELETING_BLOG_FAILURE:
            return {
                ...state,
                isDeletingBlog: false,
                isDeletingBlogSuccess: false,
                isDeletingBlogFailure: true,
                error: action.error,
            };
        default:
            return state;
    }
}

export default users;
