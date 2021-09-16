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

    error: string;
}

const initialUserState: UsersState = {
    user: {
        id: null,
        email: '',
        name: '',
        password: '',
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

    error: '',
};

export default initialUserState;
