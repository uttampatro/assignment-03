import * as actionCreators from '../actionCreators';

function getAllBlogs() {
    return async (dispatch: any, getState?: any) => {
        dispatch(actionCreators.gettingAllBlogs());
        // const result = await blogsService.getAllBlogs();

        // if (result.isLeft()) {
        //     const error: string = result.value;
        //     dispatch(actionCreators.gettingAllBlogsFailure(error));
        // } else {
        //     const profile = result.value.getValue();
        //     dispatch(actionCreators.gettingAllBlogsSuccess(profile));
        // }
    };
}

export {getAllBlogs};
