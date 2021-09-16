import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/blog';
import BlogList from './pages/blogs';
import CreateBlog from './pages/createBlog';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Users from './pages/users';
import { UsersState } from './redux/users/states';

function App() {
    const { isFetchingUser }: UsersState = useSelector((state: RootStateOrAny) => state.users);
    const accessTokenExists = localStorage.getItem("accessToken")

    if (isFetchingUser) return <>Loading...</>;

    return (
        <Switch>
            <Route exact path={'/'}>
                {accessTokenExists ? <Redirect to={{ pathname: '/blogs' }} /> : <SignIn />}
            </Route>
            <Route path={'/signUp'} component={SignUp} />
            <Route path={'/signIn'} component={SignIn} />
            <Route path={'/blogs'} component={BlogList} />
            <Route path={'/createBlog'} component={CreateBlog} />
            <Route path={'/blog/:id'} component={Blog} />
            <Route path={'/users'} component={Users} />
        </Switch>
    );
}

export default App;
