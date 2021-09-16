import {actionCreators} from '..';
import {UserRole} from '../../../models/user';
import authService from '../../../services/authService';

function createUser(name: string, email: string, password: string, role: UserRole) {
    return async (dispatch: any) => {
        dispatch(actionCreators.creatingUser());

        try {
            const result =await authService.registerUser(email, password, name, role);
            dispatch(actionCreators.creatingUserSuccess(result));
        } catch (e: any) {
            dispatch(actionCreators.creatingUserFailure(JSON.stringify(e)));
        }
    };
}

export {createUser};
