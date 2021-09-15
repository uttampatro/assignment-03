import {actionCreators} from '..';

function login(authDto: {email: string; password: string}) {
    return async (dispatch: any, getState?: any) => {
        dispatch(actionCreators.loggingIn());

        // const result = await authService.loginUser(authDto);

        // if (result.isLeft()) {
        //     const error: string = result.value;
        //     dispatch(actionCreators.loggingInFailure(error));
        // } else {
        //     dispatch(actionCreators.loggingInSuccess(result.value.getValue()));
        // }
    };
}

export {login};
