import React from 'react';
import Users from './Users';
import Preloader from '../../preloader/preloader';
import { follow, unfollow, setUsers, setUserTotalCount, changeCurrentPage, toggleFeth } from '../../../reduxFoulder/usersReducer.js';
import { connect } from 'react-redux';
import * as axios from 'axios';

class UsersApiContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFeth(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( response => {
            console.log("response: ", response);
            this.props.setUsers(response.data.items);
            this.props.setUserTotalCount(response.data.totalCount);
            this.props.toggleFeth(false);
        })
    }

    changePage = (page) => {
        this.props.toggleFeth(true);
        this.props.changeCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then( response => {
            console.log("response: ", response);
            this.props.setUsers(response.data.items);
            this.props.toggleFeth(false);
        })
    }

    render() {
        return   (
            <div>
                <span>
                    { this.props.isFetching ? <Preloader /> : null }
                </span>
                
                <Users users={this.props.users}
                            pageSize={this.props.pageSize}
                            totalCount={this.props.totalCount}
                            currentPage={this.props.currentPage}
                            changePage={this.changePage}/>
            </div>)
    }
}

let mapStateToProp = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const UsersContainer =  connect(mapStateToProp, {
                            follow,
                            unfollow,
                            setUsers,
                            setUserTotalCount,
                            changeCurrentPage,
                            toggleFeth
                        })(UsersApiContainer);

export default UsersContainer;