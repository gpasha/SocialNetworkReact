import React from 'react';
import Preloader from '../../preloader/preloader.jsx';
import Profile from './Profile.jsx';
import { getProfile, getStatus, updateStatus } from '../../../reduxFoulder/profileReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;        
        if ( !userId ) {
            userId = 7851;
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
        isFetching: state.profilePage.isFetching
    }
}

export default compose(
    connect( mapStateToProps, { getProfile, getStatus, updateStatus } ),
    withRouter,
    withAuthRedirect
)(ProfileContainer);