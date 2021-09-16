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
        case actions.LOGGING_IN:
            return {
                ...state,
                isLoggingIn: true,
                isLoggingInSuccess: false,
                isLoggingInFailure: false,
            };
        case actions.LOGGING_IN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isLoggingInSuccess: true,
                isLoggingInFailure: false,
                isAuthenticated: true,
            };
        case actions.LOGGING_IN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                isLoggingInSuccess: false,
                isLoggingInFailure: true,
                error: action.error,
            };
        case actions.CREATING_USER:
            return {
                ...state,
                isCreatingUser: true,
                isCreatingUserSuccess: false,
                isCreatingUserFailure: false,
            };
        case actions.CREATING_USER_SUCCESS:
            return {
                ...state,
                isCreatingUser: false,
                isCreatingUserSuccess: true,
                isCreatingUserFailure: false,
                user: action.user,
                isAuthenticated: true,
            };
        case actions.CREATING_USER_FAILURE:
            return {
                ...state,
                isCreatingUser: false,
                isCreatingUserSuccess: false,
                isCreatingUserFailure: true,
                error: action.error,
            };
        case actions.LOGGING_OUT_SUCCESS:
            return {
                ...state,
                isLoggingOut: false,
                isLoggingOutSuccess: true,
                isLoggingOutFailure: false,
                isAuthenticated: false,
            };
        case actions.DELETING_USER:
            return {
                ...state,
                isDeletingUser: true,
                isDeletingUserSuccess: false,
                isDeletingUserFailure: false,
            };
        case actions.DELETING_USER_SUCCESS:
            return {
                ...state,
                isDeletingUser: false,
                isDeletingUserSuccess: true,
                isDeletingUserFailure: false,
            };
        case actions.DELETING_USER_FAILURE:
            return {
                ...state,
                isDeletingUser: false,
                isDeletingUserSuccess: false,
                isDeletingUserFailure: true,
                error: action.error,
            };
        default:
            return state;
    }
}

export default users;
