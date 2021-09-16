import usersService from '../../../services/usersService';
import * as actionCreators from '../actionCreators';

function deleteUser(id: any) {
    return async (dispatch: any, getState?: any) => {
        dispatch(actionCreators.deletingUser());
        try {
            await usersService.deleteUser(id);
            dispatch(actionCreators.deletingUserSuccess());
        } catch (e: any) {
            dispatch(actionCreators.deletingUserFailure(e));
        }
    };
}

export {deleteUser};
