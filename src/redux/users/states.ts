import {User, UserRole} from '../../models/user';

export interface UsersState {
    user: User;
    isAuthenticated: boolean;

    isFetchingUser: boolean;
    isFetchingUserSuccess: boolean;
    isFetchingUserFailure: boolean;

    error: string;
}

const initialUserState: UsersState = {
    user: {
        id: null,
        email: '',
        role: UserRole.CONTENT_WRITER,
    },

    isAuthenticated: false,

    isFetchingUser: false,
    isFetchingUserSuccess: false,
    isFetchingUserFailure: false,

    error: '',
};

export default initialUserState;
