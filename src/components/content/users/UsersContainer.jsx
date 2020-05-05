import React from 'react';
import Users from './Users';
import { fullowActionCreator, unfullowActionCreator, setUsers, setUserTotalCountAC, changeCurrentPageAC } from '../../../reduxFoulder/usersReducer.js';
import { connect } from 'react-redux';
import * as axios from 'axios';

class UsersApiContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( response => {
            this.props.setUsers(response.data.items);
            this.props.setUserTotalCount(response.data.totalCount);
        })
    }

    changePage = (page) => {
        this.props.changeCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then( response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {

        return   <Users users={this.props.users}
                        pageSize={this.props.pageSize}
                        totalCount={this.props.totalCount}
                        currentPage={this.props.currentPage}
                        changePage={this.changePage}/>
        
    }
}

let mapStateToProp = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
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
        setUserTotalCount: (totalCount) => {
            dispatch(setUserTotalCountAC(totalCount));
        },
        changeCurrentPage: (page) => {
            dispatch(changeCurrentPageAC(page));
        },
    }
}

const UsersContainer = connect(mapStateToProp, mapDispatchToProps)(UsersApiContainer);

export default UsersContainer;