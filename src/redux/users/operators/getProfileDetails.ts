import usersService from '../../../services/usersService';
import * as actionCreators from '../actionCreators';

function getProfileDetails() {
    return async (dispatch: any, getState?: any) => {
        dispatch(actionCreators.gettingUserProfile());
        try {
            const result = await usersService.getUserProfileInfo();
            dispatch(actionCreators.gettingUserProfileSuccess(result));
        } catch (e: any) {
            dispatch(actionCreators.gettingUserProfileFailure(JSON.stringify(e)));
        }
    };
}

export {getProfileDetails};
