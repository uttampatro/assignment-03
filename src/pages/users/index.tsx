import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/users/operators';
import { UsersState } from '../../redux/users/states';

const Users = (props: any) => {

    const dispatch = useDispatch();
    const { allUsers, isFetchingAllUsers }: UsersState = useSelector((state: RootStateOrAny) => state.users);

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    if (isFetchingAllUsers) return <>Loading...</>

    // TODO: Show users table
    return <>{allUsers.map(user => user.id)}</>;
};

export default Users;
