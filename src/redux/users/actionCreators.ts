import {actions} from '.';
import {User} from '../../models/user';

export type UsersAction = {[key: string]: actions.UsersActionType | any};

function gettingUserProfile(): UsersAction {
    return {
        type: actions.GETTING_PROFILE_DETAILS,
    };
}

function gettingUserProfileSuccess(user: User): UsersAction & {user: User} {
    return {
        type: actions.GETTING_PROFILE_DETAILS_SUCCESS,
        user,
    };
}

function gettingUserProfileFailure(error: string): UsersAction & {error: string} {
    return {
        type: actions.GETTING_PROFILE_DETAILS_FAILURE,
        error,
    };
}

function gettingAllUsers(): UsersAction {
    return {
        type: actions.GETTING_ALL_USERS,
    };
}

function gettingAllUsersSuccess(allUsers: User[]): UsersAction & {allUsers: User[]} {
    return {
        type: actions.GETTING_ALL_USERS_SUCCESS,
        allUsers,
    };
}

function gettingAllUsersFailure(error: string): UsersAction & {error: string} {
    return {
        type: actions.GETTING_ALL_USERS_FAILURE,
        error,
    };
}

function loggingIn(): UsersAction {
    return {
        type: actions.LOGGING_IN,
    };
}

function loggingInSuccess(): UsersAction {
    return {
        type: actions.LOGGING_IN_SUCCESS,
    };
}

function loggingInFailure(error: string): UsersAction & {error: string} {
    return {
        type: actions.LOGGING_IN_FAILURE,
        error,
    };
}

function loggingOut(): UsersAction {
    return {
        type: actions.LOGGING_IN,
    };
}

function loggingOutSuccess(): UsersAction {
    return {
        type: actions.LOGGING_IN_SUCCESS,
    };
}

function loggingOutFailure(error: string): UsersAction & {error: string} {
    return {
        type: actions.LOGGING_IN_FAILURE,
        error,
    };
}

function deletingUser(): UsersAction {
    return {
        type: actions.DELETING_USER,
    };
}

function deletingUserSuccess(): UsersAction {
    return {
        type: actions.DELETING_USER_SUCCESS,
    };
}

function deletingUserFailure(error: string): UsersAction & {error: string} {
    return {
        type: actions.DELETING_USER_FAILURE,
        error,
    };
}

export {
    gettingUserProfile,
    gettingUserProfileSuccess,
    gettingUserProfileFailure,
    gettingAllUsers,
    gettingAllUsersSuccess,
    gettingAllUsersFailure,
    loggingIn,
    loggingInSuccess,
    loggingInFailure,
    loggingOut,
    loggingOutSuccess,
    loggingOutFailure,
    deletingUser,
    deletingUserSuccess,
    deletingUserFailure,
};
