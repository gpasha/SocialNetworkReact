
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
                ...action.authData,
                isAuthozied: true
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

export const setProfileData = ({id, email, login}) => ({ type: SET_AUTH_DATA, authData: {id, email, login}});
export const toggleFeth = (isFetching) =>({ type: TOGGLE_FETCH, isFetching });
    
export default authorizeReducer;