import React from 'react';
import UserList from '../components/UserList'
const Users=()=>{
const USERS=[{id:'u1',name:'علی حکمت',places:3,image:'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'}]
    return <UserList items={USERS}/>;
}

export default Users;