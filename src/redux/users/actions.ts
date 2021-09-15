export type UsersActionType =
    | 'GETTING_PROFILE_DETAILS'
    | 'GETTING_PROFILE_DETAILS_SUCCESS'
    | 'GETTING_PROFILE_DETAILS_FAILURE'
    | 'GETTING_ALL_USERS'
    | 'GETTING_ALL_USERS_SUCCESS'
    | 'GETTING_ALL_USERS_FAILURE'
    | 'LOGGING_IN'
    | 'LOGGING_IN_SUCCESS'
    | 'LOGGING_IN_FAILURE'
    | 'USER_LOGGED_OUT';

const GETTING_PROFILE_DETAILS: UsersActionType = 'GETTING_PROFILE_DETAILS';
const GETTING_PROFILE_DETAILS_SUCCESS: UsersActionType = 'GETTING_PROFILE_DETAILS_SUCCESS';
const GETTING_PROFILE_DETAILS_FAILURE: UsersActionType = 'GETTING_PROFILE_DETAILS_FAILURE';

const GETTING_ALL_USERS: UsersActionType = 'GETTING_ALL_USERS';
const GETTING_ALL_USERS_SUCCESS: UsersActionType = 'GETTING_ALL_USERS_SUCCESS';
const GETTING_ALL_USERS_FAILURE: UsersActionType = 'GETTING_ALL_USERS_FAILURE';

const LOGGING_IN: UsersActionType = 'LOGGING_IN';
const LOGGING_IN_SUCCESS: UsersActionType = 'LOGGING_IN_SUCCESS';
const LOGGING_IN_FAILURE: UsersActionType = 'LOGGING_IN_FAILURE';

const USER_LOGGED_OUT: UsersActionType = 'USER_LOGGED_OUT';

export {
    GETTING_PROFILE_DETAILS,
    GETTING_PROFILE_DETAILS_SUCCESS,
    GETTING_PROFILE_DETAILS_FAILURE,
    GETTING_ALL_USERS,
    GETTING_ALL_USERS_SUCCESS,
    GETTING_ALL_USERS_FAILURE,
    LOGGING_IN,
    LOGGING_IN_SUCCESS,
    LOGGING_IN_FAILURE,
    USER_LOGGED_OUT,
};
