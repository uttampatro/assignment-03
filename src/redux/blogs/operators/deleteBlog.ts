import blogsService from '../../../services/blogsService';
import * as actionCreators from '../actionCreators';

function deleteBlog(id: any) {
    return async (dispatch: any, getState?: any) => {
        dispatch(actionCreators.deletingBlog());
        try {
            await blogsService.deleteBlog(id);
            dispatch(actionCreators.deletingBlogSuccess());
        } catch (e: any) {
            dispatch(actionCreators.deletingBlogFailure(e));
        }
    };
}

export {deleteBlog };