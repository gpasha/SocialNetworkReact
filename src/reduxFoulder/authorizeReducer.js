import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_AUTH_DATA = "SET_AUTH_DATA";
const TOGGLE_FETCH = "TOGGLE_FETCH";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuthozied: false,
    isFetching: false,
};

const authorizeReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.authData
            }; 
        case TOGGLE_FETCH:
            return {
                ...state,
                isFetching: action.isFetching
                } 
        default:
            return state;
    }
}

export const setProfileData = ({id, email, login, isAuthozied}) => ({ type: SET_AUTH_DATA, authData: {id, email, login, isAuthozied}});
export const toggleFeth = (isFetching) =>({ type: TOGGLE_FETCH, isFetching });

export const authorize = () => async (dispath) => {

    dispath(toggleFeth(true));
    let response = await authAPI.authorize();
    if ( response.resultCode === 0 ) {
        let data = response.data;
        dispath(setProfileData({id: data.id, email: data.email, login: data.login, isAuthozied: true}));
        dispath(toggleFeth(false));
    }
}

export const login = (email, password, rememberMe) => async (dispath) => {

    dispath(toggleFeth(true));
    let response = await authAPI.login(email, password, rememberMe);
    if ( response.resultCode === 0 ) {
        dispath(authorize());
    }
    else {
        let errorMessage = response.messages.length > 0 ? response.messages[0] : "Some unknow error";
        dispath(stopSubmit("login", { _error: errorMessage } ));
    }
}

export const logout = () => async (dispath) => {
    dispath(toggleFeth(true));
    let response = await authAPI.logout();
    if ( response.resultCode === 0 ) {
        dispath(setProfileData({id: null, email: null, login: null, isAuthozied: false}));
    }
}
    
export default authorizeReducer;