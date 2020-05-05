import React from 'react';
import './Navigation.css';
import { Link  } from 'react-router-dom';

function Navigation() {
    return (     
          <nav className="App-navigation">
            <ul>
              <li>
                <Link  to="/profile">Profile</Link >                
              </li>
              <li>
                <Link  to="/users">Users</Link >
              </li>
              <li>
                <Link  to="/messages">Messages</Link >
              </li>
              <li>News</li>
              <li>Misic</li>
            </ul>
          </nav>
    );
}

export default Navigation;