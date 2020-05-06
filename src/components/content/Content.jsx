import React from 'react'; 
import './Content.css';
import ProfileContainer from './profile/ProfileContainer';
import MessagesContainer from './messages/MessagesContainer';
import UsersContainer from './users/UsersContainer';
import { Switch, Route } from 'react-router-dom';


function Content(props) {
    return (    
      <Switch>
        <main  className="App-content">
            <Route path="/profile/:userId?" render={ () => <ProfileContainer />} />
            <Route path="/users" render={ () => <UsersContainer />} /> 
            <Route path="/messages" render={ () => <MessagesContainer />} /> 
        </main>     
      </Switch>
    );
}

export default Content;