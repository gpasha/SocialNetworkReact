import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
import { authorize } from './authorizeReducer';

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
// const TOGGLE_FETCH = "TOGGLE_FETCH";

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {

    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }; 
        // case TOGGLE_FETCH:
        //     return {
        //         ...state,
        //         isFetching: action.isFetching
        //         } 
        default:
            return state;
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });
// export const toggleFeth = (isFetching) =>({ type: TOGGLE_FETCH, isFetching });

export const initializeApp = () => (dispath) => {
    let promize = dispath(authorize());
    promize.then( () => {
        dispath(initializedSuccess());
    });

    // dispath(toggleFeth(true));
    // authAPI.authorize().then( response => {
    //     if ( response.resultCode === 0 ) {
    //         let data = response.data;
    //         dispath(setProfileData({id: data.id, email: data.email, login: data.login, isAuthozied: true}))
    //         dispath(toggleFeth(false));
    //     }
    // })
}

// export const login = (email, password, rememberMe) => (dispath) => {

//     dispath(toggleFeth(true));
//     authAPI.login(email, password, rememberMe).then( response => {
//         if ( response.resultCode === 0 ) {
//             dispath(authorize());
//         }
//         else {
//             let errorMessage = response.messages.length > 0 ? response.messages[0] : "Some unknow error";
//             dispath(stopSubmit("login", { _error: errorMessage } ));
//         }
//     })
// }

// export const logout = () => (dispath) => {
//     dispath(toggleFeth(true));
//     authAPI.logout().then( response => {
//         if ( response.resultCode === 0 ) {
//             dispath(setProfileData({id: null, email: null, login: null, isAuthozied: false}));
//         }
//     })
// }
    
export default appReducer;