import {User, UserRole} from '../../models/user';

export interface UsersState {
    user: User;
    isAuthenticated: boolean;

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
        role: UserRole.CONTENT_WRITER,
    },

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
