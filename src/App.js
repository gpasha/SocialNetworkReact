import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Content from './components/content/Content';
import HeaderContainer from './components/header/HeaderContainer';
import { initializeApp } from './reduxFoulder/appReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Preloader from './components/preloader/preloader';

class App extends React.Component {
  
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if ( !this.props.initialized ) {
      return <Preloader />
    }

    return (
      <div className="App">
        <HeaderContainer />
        <Navigation />
        <Content />
      </div>
    );
  } 
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default compose(
  withRouter,
  connect( mapStateToProps, { initializeApp } ))(App);
