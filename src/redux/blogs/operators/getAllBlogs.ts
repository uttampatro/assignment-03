import blogsService from '../../../services/blogsService';
import * as actionCreators from '../actionCreators';

function getAllBlogs() {
    return async (dispatch: any, getState?: any) => {
        dispatch(actionCreators.gettingAllBlogs());
        try {
            const result = await blogsService.getAllBlogs();
            dispatch(actionCreators.gettingAllBlogsSuccess(result));
        } catch (e: any) {
            dispatch(actionCreators.gettingAllBlogsFailure(JSON.stringify(e)));
        }
    };
}

export {getAllBlogs};
