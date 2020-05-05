import React from 'react';
import Users from './Users';
import {fullowActionCreator, unfullowActionCreator, setUsers} from '../../../reduxFoulder/usersReducer.js';
import { connect } from 'react-redux';

let mapStateToProp = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(fullowActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfullowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        },
    }
}

const UsersContainer = connect(mapStateToProp, mapDispatchToProps)(Users);

export default UsersContainer;