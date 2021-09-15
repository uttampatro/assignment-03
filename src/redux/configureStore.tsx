import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import blogsReducer from './blogs/reducers';
import initialBlogsState, {
    BlogsState
} from "./blogs/states";
import { actions } from "./users";
import { UsersAction } from "./users/actionCreators";
import usersReducer from './users/reducers';
import initialUserState, {
    UsersState
} from "./users/states";

export interface RootState {
    users: (state: UsersState | undefined, action: UsersAction) => UsersState;
    notifications: (
        state: BlogsState | undefined,
        action: BlogsState
    ) => BlogsState;
}

const appReducers = combineReducers({
    users: usersReducer,
    blogs: blogsReducer,
});

const rootReducer = (state: any, action: any) => {
    if (action.type === actions.USER_LOGGED_OUT) {
        state = {
            users: initialUserState,
            blogs: initialBlogsState,
        };
    }
    return appReducers(state, action);
};

export default function configureStore(initialState = {}) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            (window as any).devToolsExtension
                ? (window as any).devToolsExtension()
                : (f: any) => f
        )
    );
}
