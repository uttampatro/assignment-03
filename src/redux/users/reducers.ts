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
        case actions.GETTING_ALL_USERS:
            return {
                ...state,
                isFetchingAllUsers: true,
                isFetchingAllUsersSuccess: false,
                isFetchingAllUsersFailure: false,
            };
        case actions.GETTING_ALL_USERS_SUCCESS:
            return {
                ...state,
                isFetchingAllUsers: false,
                isFetchingAllUsersSuccess: true,
                isFetchingAllUsersFailure: false,
                allUsers: action.allUsers,
            };
        case actions.GETTING_ALL_USERS_FAILURE:
            return {
                ...state,
                isFetchingAllUsers: false,
                isFetchingAllUsersSuccess: false,
                isFetchingAllUsersFailure: true,
                error: action.error,
            };
        case actions.SET_EMAIL:
            return {
                ...state,
                email: action.email,
            };
        case actions.SET_PASSWORD:
            return {
                ...state,
                password: action.password,
            };
        case actions.LOGGING_IN:
            return {
                ...state,
            };
        case actions.LOGGING_IN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
            };
        case actions.LOGGING_IN_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}

export default users;
