const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";
const USER_PAGE_COUNT = 4;

let initialState = {
    users: [],
    pageSize: USER_PAGE_COUNT,
    totalCount: 0,
    currentPage: 1
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
                // users: [...state.users, ...action.users]
                users: [...action.users]
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }    
        default:
            return state;
    }
}

export const fullowActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfullowActionCreator = (userId) =>({ type: UNFOLLOW, userId });
export const setUsers = (users) =>({ type: SET_USERS, users });
export const setUserTotalCountAC = (totalCount) =>({ type: SET_USERS_TOTAL_COUNT, totalCount });
export const changeCurrentPageAC = (page) =>({ type: CHANGE_CURRENT_PAGE, page });
    
export default usersReducer;