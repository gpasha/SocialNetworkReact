import { createStore, combineReducers } from "redux";
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import navigationReducer from './navigationReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({    
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    navigation: navigationReducer
});

let store = createStore(reducers);


export default store;