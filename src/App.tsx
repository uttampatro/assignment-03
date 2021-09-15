import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/blog';
import Blogs from './pages/blogs';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Users from './pages/users';
import { UsersState } from './redux/users/states';

function App() {
    const { isFetchingUser, isAuthenticated }: UsersState = useSelector((state: RootStateOrAny) => state.users);

    // if (isFetchingUser) return <>Loading...</>;

    return (
        <Switch>
            <Route exact path={'/'}>
                {isAuthenticated ? <Redirect to={{ pathname: '/blogs' }} /> : <Redirect to={{ pathname: '/signIn' }} />}
            </Route>
            <Route path={'/signUp'} component={SignUp} />
            <Route path={'/signIn'} component={SignIn} />
            <Route path={'/blogs'} component={Blogs} />
            <Route path={'/blog'} component={Blog} />
            <Route path={'/users'} component={Users} />
        </Switch>
    );
}

export default App;
