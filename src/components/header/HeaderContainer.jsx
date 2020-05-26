import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authorize } from '../../reduxFoulder/authorizeReducer';


class HeaderContainer extends React.Component {
  
  componentDidMount() {
    this.props.authorize()
  }

  render() {
    return <Header {...this.props} />
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

export default connect(mapStateToProps,{ authorize })(HeaderContainer);