import {useParams} from 'react-router-dom';
import blogsService from '../../../services/blogsService';
import * as actionCreators from '../actionCreators';

function getBlogDetails(_id: any) {
    return async (dispatch: any, getState?: any) => {
        dispatch(actionCreators.gettingBlogDetails());
        try {
            const result = await blogsService.getBlogByBlogId(_id);
            dispatch(actionCreators.gettingBlogDetailsFailure(result));
        } catch (e: any) {
            dispatch(actionCreators.gettingBlogDetailsFailure(JSON.stringify(e)));
        }
    };
}

export {getBlogDetails};
