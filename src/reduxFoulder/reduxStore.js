import { createStore, combineReducers } from "redux";
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import navigationReducer from './navigationReducer';
import usersReducer from './usersReducer';
import authorizeReducer from './authorizeReducer';

let reducers = combineReducers({    
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    navigation: navigationReducer,
    authorize: authorizeReducer
});

let store = createStore(reducers);

window.store = store;

export default store;