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

    isLoggingOut: boolean;
    isLoggingOutSuccess: boolean;
    isLoggingOutFailure: boolean;

    error: string;
}

const initialUserState: UsersState = {
    user: {
        id: null,
        email: '',
        name: '',
        role: UserRole.CONTENT_WRITER,
    },
    email: '',
    password: '',
    isAuthenticated: false,

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

    isLoggingOut: false,
    isLoggingOutSuccess: false,
    isLoggingOutFailure: false,

    error: '',
};

export default initialUserState;
