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

function loggingIn(): UsersAction {
    return {
        type: actions.LOGGING_IN,
    };
}

function loggingInSuccess(user: User): UsersAction & {user: User} {
    return {
        type: actions.LOGGING_IN_SUCCESS,
        user,
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

function loggingOutSuccess(user: User): UsersAction & {user: User} {
    return {
        type: actions.LOGGING_IN_SUCCESS,
        user,
    };
}

function loggingOutFailure(error: string): UsersAction & {error: string} {
    return {
        type: actions.LOGGING_IN_FAILURE,
        error,
    };
}

export {
    gettingUserProfile,
    gettingUserProfileSuccess,
    gettingUserProfileFailure,
    loggingIn,
    loggingInSuccess,
    loggingInFailure,
    loggingOut,
    loggingOutSuccess,
    loggingOutFailure,
};
