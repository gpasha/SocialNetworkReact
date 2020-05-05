import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Content from './components/content/Content';

function App(props) {
  return (
      <div className="App">
        <Header />
        <Navigation />
        <Content />
      </div>
  );
}

export default App;
