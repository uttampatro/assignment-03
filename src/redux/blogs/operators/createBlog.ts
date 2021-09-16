import {actionCreators} from '..';
import blogsService, {CreateBlogDTO} from '../../../services/blogsService';

function createBlog(dto: CreateBlogDTO) {
    const {title, article, imageUrl, userId} = dto;
    return async (dispatch: any) => {
        dispatch(actionCreators.creatingBlog());

        try {
            const result = await blogsService.createBlog({title, article, imageUrl, userId});
            dispatch(actionCreators.creatingBlogSuccess(result));
        } catch (e: any) {
            dispatch(actionCreators.creatingBlogFailure(JSON.stringify(e)));
        }
    };
}

export {createBlog};
