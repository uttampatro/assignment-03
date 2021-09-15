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
                blogs: state.blogs,
            };
        case actions.GETTING_ALL_BLOGS_FAILURE:
            return {
                ...state,
                isFetchingAllBlogs: false,
                isFetchingAllBlogsSuccess: false,
                isFetchingAllBlogsFailure: true,
                error: action.error,
            };
        default:
            return state;
    }
}

export default users;
