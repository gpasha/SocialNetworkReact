import React from 'react';
import Users from './Users';
import Preloader from '../../preloader/preloader';
import { follow, unfollow,  changeCurrentPage, toggleFeth, getUsers } from '../../../reduxFoulder/usersReducer.js';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getAllUsers, getPageSize, getTotalCount, getCurrentPage, getFetching, getAllUsersSuper} from './../../../reduxFoulder/usersSelectors';

class UsersApiContainer extends React.PureComponent {

    componentDidMount() {
        let { currentPage, pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    changePage = (page) => {
        let { pageSize } = this.props;
        this.props.getUsers(page, pageSize);
        this.props.changeCurrentPage(page);
    }

    render() {
        console.log(" mapStateToProp USERS  = render = ");
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
    console.log(" mapStateToProp USERS");
    return {
        users: getAllUsers(state),
        // users: getAllUsersSuper(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetching(state)
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
