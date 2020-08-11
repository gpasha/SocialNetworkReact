import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

function Header(props) {
  // console.log("Header props: ", props)
  // console.log("Header props.isAuthozied: ", props.isAuthozied)
    return (
      <header className="app-header">
        {
          props.isAuthozied
            ? <div className="app-header__login">
                {props.login}
                <button onClick={props.logout}>Log out</button>
              </div> 
            : <Link to="/login">
                <div className="app-header__login">Login</div>  
              </Link>        
        }
        
      </header>
    );
}
export default Header;