import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import navigationReducer from './navigationReducer';
import usersReducer from './usersReducer';
import authorizeReducer from './authorizeReducer';
import appReducer from './appReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'; 


let reducers = combineReducers({    
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    navigation: navigationReducer,
    authorize: authorizeReducer,
    app: appReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;