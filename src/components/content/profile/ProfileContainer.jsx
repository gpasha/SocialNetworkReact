import React from 'react';
import Preloader from '../../preloader/preloader.jsx';
import Profile from './Profile.jsx';
import { getProfile, getStatus, updateStatus } from '../../../reduxFoulder/profileReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.PureComponent {

    componentDidMount() {
        let userId = this.props.match.params.userId;        
        if ( !userId ) {
            console.log("this.props.authorizedUserId: ", this.props.authorizedUserId)
            // this.props.isAuthozied
            // userId = 7851;
            userId = this.props.authorizedUserId;
            if ( !userId ) {
                this.props.history.push("/login");
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <>
                <span>
                    { this.props.isFetching ? <Preloader /> : null }
                </span>
                <Profile {...this.props}
                    profileData={this.props.profileData}
                    profileStatus={this.props.profileStatus}
                    updateStatus={this.props.updateStatus} />
            </>
        )         
    }
}

let mapStateToProps = (state) => {
    return {        
        profileData: state.profilePage.profileData,
        profileStatus: state.profilePage.profileStatus,
        isFetching: state.profilePage.isFetching,
        authorizedUserId: state.authorize.id,
        // isAuthozied: state.authorize.isAuthozied
    }
}

export default compose(
    connect( mapStateToProps, { getProfile, getStatus, updateStatus } ),
    withRouter,
    withAuthRedirect
)(ProfileContainer);