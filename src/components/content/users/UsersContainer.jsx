import React from 'react';
import Users from './Users';
import Preloader from '../../preloader/preloader';
import { follow, unfollow,  changeCurrentPage, toggleFeth, getUsers } from '../../../reduxFoulder/usersReducer.js';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersApiContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    changePage = (page) => {
        this.props.getUsers(page, this.props.pageSize);
        this.props.changeCurrentPage(page);
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
                            changePage={this.changePage}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            isAuth={this.props.isAuth}/>
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

export default compose(
    connect(mapStateToProp, {
        follow,
        unfollow,
        changeCurrentPage,
        toggleFeth,
        getUsers
    }),
    withAuthRedirect
)(UsersApiContainer);
