import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Content from './components/content/Content';
import HeaderContainer from './components/header/HeaderContainer';

function App(props) {
  return (
      <div className="App">
        <HeaderContainer />
        <Navigation />
        <Content />
      </div>
  );
}

export default App;
