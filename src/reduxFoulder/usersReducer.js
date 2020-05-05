const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        // {id: 1, followed: true, photoUrl: 'https://vokrug.tv/pic/news/9/f/4/6/9f466307ab9f357c0db710631834bc95.jpg', fullName: "Dmitriy", status: "I am free", location: {city: "Minsk", country: "Belarus"}},
        // {id: 2, followed: false, photoUrl: 'https://vokrug.tv/pic/news/9/f/4/6/9f466307ab9f357c0db710631834bc95.jpg', fullName: "Maxim", status: "I am free too", location: {city: "Moscow", country: "Russia"}},
        // {id: 3, followed: true, photoUrl: 'https://vokrug.tv/pic/news/9/f/4/6/9f466307ab9f357c0db710631834bc95.jpg', fullName: "Svetlana", status: "I am in relation", location: {city: "Grodno", country: "Belarus"}},
    ]
};

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:            
            return {
                ...state,
                users: state.users.map(u => {
                    if ( u.id === action.userId ) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:          
            return {
                ...state,
                users: state.users.map( u => {
                    if ( u.id === action.userId ) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }       
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }    
        default:
            return state;
    }
}

export const fullowActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfullowActionCreator = (userId) =>({ type: UNFOLLOW, userId });
export const setUsers = (users) =>({ type: SET_USERS, users });
    
export default usersReducer;