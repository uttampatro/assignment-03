import {User, UserRole} from '../../models/user';

export interface UsersState {
    user: User;
    isAuthenticated: boolean;
    email: string;
    password: string;

    isFetchingUser: boolean;
    isFetchingUserSuccess: boolean;
    isFetchingUserFailure: boolean;

    allUsers: User[];

    isFetchingAllUsers: boolean;
    isFetchingAllUsersSuccess: boolean;
    isFetchingAllUsersFailure: boolean;

    isLoggingIn: boolean;
    isLoggingInSuccess: boolean;
    isLoggingInFailure: boolean;

    isCreatingUser: boolean;
    isCreatingUserSuccess: boolean;
    isCreatingUserFailure: boolean;

    isLoggingOut: boolean;
    isLoggingOutSuccess: boolean;
    isLoggingOutFailure: boolean;

    isDeletingUser: boolean;
    isDeletingUserSuccess: boolean;
    isDeletingUserFailure: boolean;

    error: string;
}

const initialUserState: UsersState = {
    user: {
        _id: null,
        email: '',
        name: '',
        role: UserRole.CONTENT_WRITER,
    },
    isAuthenticated: false,
    email: '',
    password: '',

    isFetchingUser: false,
    isFetchingUserSuccess: false,
    isFetchingUserFailure: false,

    allUsers: [],

    isFetchingAllUsers: false,
    isFetchingAllUsersSuccess: false,
    isFetchingAllUsersFailure: false,

    isLoggingIn: false,
    isLoggingInSuccess: false,
    isLoggingInFailure: false,

    isCreatingUser: false,
    isCreatingUserSuccess: false,
    isCreatingUserFailure: false,

    isLoggingOut: false,
    isLoggingOutSuccess: false,
    isLoggingOutFailure: false,

    isDeletingUser: false,
    isDeletingUserSuccess: false,
    isDeletingUserFailure: false,

    error: '',
};

export default initialUserState;
