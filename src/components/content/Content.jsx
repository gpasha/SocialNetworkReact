import React from 'react'; 
import './Content.css';
import Profile from './profile/Profile';
import MessagesContainer from './messages/MessagesContainer';
import UsersContainer from './users/UsersContainer';
import { Switch, Route } from 'react-router-dom';


function Content(props) {
    return (    
      <Switch>
        <main  className="App-content">
            {/* <Route path="/profile" render={ () => <Profile  postData={props.state.profilePage.posts} store={props.store} />} />
            <Route path="/messages" render={ () => <MessagesContainer store={props.store} />} /> 
             */}
            <Route path="/profile" render={ () => <Profile />} />
            <Route path="/users" render={ () => <UsersContainer />} /> 
            <Route path="/messages" render={ () => <MessagesContainer />} /> 
        </main>     
      </Switch>
    );
}

export default Content;