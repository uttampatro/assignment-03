import {actionCreators} from '..';
import authService from '../../../services/authService';

function login(email: string, password: string) {
    return async (dispatch: any) => {
        dispatch(actionCreators.loggingIn());

        try {
            await authService.login(email, password);
            dispatch(actionCreators.loggingInSuccess());
        } catch (e: any) {
            dispatch(actionCreators.loggingInFailure(JSON.stringify(e)));
        }
    };
}

export {login};
