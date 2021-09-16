import {actionCreators} from '..';
import authService from '../../../services/authService';

function logout() {
    return async (dispatch: any, getState?: any) => {
        try {
            await authService.logout();
            dispatch(actionCreators.loggingOutSuccess());
        } catch (e: any) {}
    };
}

export {logout};
