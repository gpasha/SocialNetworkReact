import { usersAPI, followAPI } from '../api/api';
import { updateObjectInArray } from '../utils/objectHelpers';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";
const TOGGLE_FETCH = "TOGGLE_FETCH";
const USER_PAGE_COUNT = 4;

let initialState = {
    users: [],
    pageSize: USER_PAGE_COUNT,
    totalCount: 0,
    currentPage: 1,    
    isFetching: false
};

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:          
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
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
        case TOGGLE_FETCH:
                return {
                    ...state,
                    isFetching: action.isFetching
                }    
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) =>({ type: UNFOLLOW, userId });
export const setUsers = (users) =>({ type: SET_USERS, users });
export const setUserTotalCount = (totalCount) =>({ type: SET_USERS_TOTAL_COUNT, totalCount });
export const changeCurrentPage = (page) =>({ type: CHANGE_CURRENT_PAGE, page });
export const toggleFeth = (isFetching) =>({ type: TOGGLE_FETCH, isFetching });

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleFeth(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    console.log("data: ", data);
    dispatch(setUsers(data.items));
    dispatch(setUserTotalCount(data.totalCount));
    dispatch(toggleFeth(false));
}

let followUnfollowFlow = async (dispatch, iserId, apiMethod, actionCreator) => {
    dispatch(toggleFeth(true));
    let data = await apiMethod(iserId);
    if ( data.resultCode === 0) {
        dispatch(actionCreator(iserId));
    }
    dispatch(toggleFeth(false));
};

export const follow = (iserId) => async (dispatch) => {
    followUnfollowFlow(dispatch, iserId, followAPI.follow.bind(followAPI), followSuccess);
}

export const unfollow = (iserId) => async (dispatch) => {
    followUnfollowFlow(dispatch, iserId, followAPI.unfollow.bind(followAPI), unfollowSuccess);
}

export default usersReducer;