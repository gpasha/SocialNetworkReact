import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

function Header(props) {
    return (
      <header className="app-header">
        {
          props.isAuthozied ? <div className="app-header__login">{props.login}</div> : 
          <Link to="/login">
            <div className="app-header__login">Login</div>  
          </Link>          
        }
        
      </header>
    );
}
export default Header;