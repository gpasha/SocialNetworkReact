import React from 'react';
import Preloader from '../../preloader/preloader.jsx';
import Profile from './Profile.jsx';
import { getProfile } from '../../../reduxFoulder/profileReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
    }

    render() {
        return (
            <>
                <span>
                    { this.props.isFetching ? <Preloader /> : null }
                </span>
                <Profile {...this.props} profileData={this.props.profileData}/>
            </>
        )         
    }
}

let mapStateToProps = (state) => {
    return {        
        profileData: state.profilePage.profileData,
        isFetching: state.profilePage.isFetching
    }
}

export default compose(
    connect( mapStateToProps, { getProfile } ),
    withRouter,
    withAuthRedirect
)(ProfileContainer);