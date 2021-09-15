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

export {gettingAllBlogs, gettingAllBlogsSuccess, gettingAllBlogsFailure};
