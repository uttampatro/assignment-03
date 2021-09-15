import { actionCreators } from '..';
import authService from '../../../services/authService';

function login(email: string, password: string) {
    return async (dispatch: any) => {
        dispatch(actionCreators.loggingIn());

        const result = await authService.login(email, password);

        if (result.isLeft()) {
            const error: string = result.value;
            dispatch(actionCreators.loggingInFailure(error));
        } else {
            dispatch(actionCreators.loggingInSuccess(result.value.getValue()));
        }
    };
}

export { login };

