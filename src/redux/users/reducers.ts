import {UsersAction} from './actionCreators';
import * as actions from './actions';
import initialUserState, {UsersState} from './states';

function users(state: UsersState = initialUserState, action: UsersAction): UsersState {
    switch (action.type as actions.UsersActionType) {
        case actions.GETTING_PROFILE_DETAILS:
            return {
                ...state,
                isFetchingUser: true,
                isFetchingUserSuccess: false,
                isFetchingUserFailure: false,
            };
        case actions.GETTING_PROFILE_DETAILS_SUCCESS:
            return {
                ...state,
                isFetchingUser: false,
                isFetchingUserSuccess: true,
                isFetchingUserFailure: false,
                isAuthenticated: true,
                user: {...state.user, ...action.user},
            };
        case actions.GETTING_PROFILE_DETAILS_FAILURE:
            return {
                ...state,
                isFetchingUser: false,
                isFetchingUserSuccess: false,
                isFetchingUserFailure: true,
                error: action.error,
            };
        default:
            return state;
    }
}

export default users;
