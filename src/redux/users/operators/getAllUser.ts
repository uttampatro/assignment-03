import usersService from '../../../services/usersService';
import * as actionCreators from '../actionCreators';

function getAllUsers() {
    return async (dispatch: any, getState?: any) => {
        dispatch(actionCreators.gettingAllUsers());
        const result = await usersService.fetchAllUsers();

        // if (result.isLeft()) {
        //     const error: string = result.value;
        //     dispatch(actionCreators.gettingAllUsersFailure(error));
        // } else {
        //     const profile = result.value.getValue();
        //     dispatch(actionCreators.gettingAllUsersSuccess(profile));
        // }
    };
}

export {getAllUsers};
