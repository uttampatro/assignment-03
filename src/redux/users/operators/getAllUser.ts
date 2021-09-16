import usersService from '../../../services/usersService';
import * as actionCreators from '../actionCreators';

function getAllUsers() {
    return async (dispatch: any, getState?: any) => {
        dispatch(actionCreators.gettingAllUsers());
        try {
            const result = await usersService.fetchAllUsers();
            dispatch(actionCreators.gettingAllUsersSuccess(result));
        } catch (e: any) {
            dispatch(actionCreators.gettingAllUsersFailure(JSON.stringify(e)));
        }
    };
}

export {getAllUsers};
