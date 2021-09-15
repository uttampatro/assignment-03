import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Blogs from './pages/blogs';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Users from './pages/users';
import { UsersState } from './redux/users/states';

function App() {

    const { isFetchingUser, isAuthenticated }: UsersState = useSelector((state: RootStateOrAny) => state.users);

    if (isFetchingUser) return <>Loading...</>;

    return (
        <Switch>
            <Route exact path={'/'}>
                {isAuthenticated ? <Redirect to={{ pathname: '/blogs' }} /> : <Signin />}
            </Route>
            <Route path={'/signup'} component={Signup} />
            <Route path={'/signin'} component={Signin} />
            <Route path={'/blogs'} component={Blogs} />
            <Route path={'/users'} component={Users} />
        </Switch>
    );
}

export default App;
