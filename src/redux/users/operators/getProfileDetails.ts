import * as actionCreators from '../actionCreators';

function getProfileDetails() {
    return async (dispatch: any, getState?: any) => {
        dispatch(actionCreators.gettingUserProfile());
        // const result = await usersService.getCurrentUserProfileInfo();

        // if (result.isLeft()) {
        //     const error: string = result.value;
        //     dispatch(actionCreators.gettingUserProfileFailure(error));
        // } else {
        //     const profile = result.value.getValue();
        //     dispatch(actionCreators.gettingUserProfileSuccess(profile));
        // }
    };
}

export {getProfileDetails};
