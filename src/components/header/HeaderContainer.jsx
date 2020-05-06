import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setProfileData, toggleFeth } from '../../reduxFoulder/authorizeReducer';
import Preloader from '../preloader/preloader';
import ProfileContainer from '../content/profile/ProfileContainer';

class HeaderContainer extends React.Component {
  
  componentDidMount() {
    this.props.toggleFeth(true)
    axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", { withCredentials: true })
         .then( response => {
           console.log("response from HeaderContainer: ", response);
           let data = response.data.data;
           this.props.setProfileData({id: data.id, email: data.email, login: data.login})
           this.props.toggleFeth(false);
           
           console.log("this.props from HeaderContainer: ", this.props);
         })
  }

  render() {
    return <>
      { this.props.isFetching
        ? <Preloader />
        : <Header {...this.props} /> }
    </>
  }    
}

let mapStateToProps = (state) => {
  return {
    id: state.authorize.id,
    email: state.authorize.email,
    login: state.authorize.login,
    isAuthozied: state.authorize.isAuthozied,
    isFetching: state.authorize.isFetching,
  }
}

export default connect(mapStateToProps,{ setProfileData, toggleFeth })(HeaderContainer);