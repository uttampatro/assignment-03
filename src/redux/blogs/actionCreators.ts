import {actions} from '.';
import {Blog} from '../../models/blog';

export type BlogsAction = {[key: string]: actions.BlogsActionType | any};

function gettingAllBlogs(): BlogsAction {
    return {
        type: actions.GETTING_ALL_BLOGS,
    };
}

function gettingAllBlogsSuccess(blogs: Blog[]): BlogsAction & {blogs: Blog[]} {
    return {
        type: actions.GETTING_ALL_BLOGS_SUCCESS,
        blogs,
    };
}

function gettingAllBlogsFailure(error: string): BlogsAction & {error: string} {
    return {
        type: actions.GETTING_ALL_BLOGS_FAILURE,
        error,
    };
}

function gettingBlogDetails(): BlogsAction {
    return {
        type: actions.GETTING_BLOG_DETAILS,
    };
}

function gettingBlogDetailsSuccess(blog: Blog): BlogsAction & {blog: Blog} {
    return {
        type: actions.GETTING_BLOG_DETAILS_FAILURE,
        blog,
    };
}

function gettingBlogDetailsFailure(error: string): BlogsAction & {error: string} {
    return {
        type: actions.GETTING_BLOG_DETAILS_FAILURE,
        error,
    };
}

function deletingBlog(): BlogsAction {
    return {
        type: actions.DELETING_BLOG,
    };
}

function deletingBlogSuccess(): BlogsAction {
    return {
        type: actions.DELETING_BLOG_SUCCESS,
    };
}

function deletingBlogFailure(error: string): BlogsAction & {error: string} {
    return {
        type: actions.DELETING_BLOG_FAILURE,
        error,
    };
}

function creatingBlog(): BlogsAction {
    return {
        type: actions.CREATING_BLOG,
    };
}

function creatingBlogSuccess(blog: Blog): BlogsAction & {blog: Blog} {
    return {
        type: actions.CREATING_BLOG_SUCCESS,
        blog,
    };
}

function creatingBlogFailure(error: string): BlogsAction & {error: string} {
    return {
        type: actions.CREATING_BLOG_FAILURE,
        error,
    };
}

export {
    gettingAllBlogs,
    gettingAllBlogsSuccess,
    gettingAllBlogsFailure,
    gettingBlogDetails,
    gettingBlogDetailsSuccess,
    gettingBlogDetailsFailure,
    deletingBlog,
    deletingBlogSuccess,
    deletingBlogFailure,
    creatingBlog,
    creatingBlogSuccess,
    creatingBlogFailure,
};
