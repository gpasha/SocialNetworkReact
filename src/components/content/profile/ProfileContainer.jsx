import React from 'react';
import Preloader from '../../preloader/preloader.jsx';
import Profile from './Profile.jsx';
import { toggleFeth, setProfileData } from '../../../reduxFoulder/profileReducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFeth(true);
        // console.log("componentDidMount work ");
        // console.log(" =>  this.props from ProfileContainer: ", this.props);
        let userId = this.props.match.params.userId;
        if ( !userId ) {
            userId = 2;
        }
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId).then( response => {
            console.log("response from ProfileContainer: ", response);
            this.props.setProfileData(response.data);
            this.props.toggleFeth(false);
        })
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
        isFetching: state.profilePage.isFetching,
    }
}

let ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect( mapStateToProps, { toggleFeth, setProfileData } )(ProfileContainerWithRouter);