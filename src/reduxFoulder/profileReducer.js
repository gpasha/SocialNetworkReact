import { profileAPI } from '../api/api';

const SET_PROFILE_DATA = "SET_PROFILE_DATA";
const SET_STATUS = "SET_STATUS";
const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST";
const TOGGLE_FETCH = "TOGGLE_FETCH";

let initialState = {
    profileData: null,
    profileStatus: '',
    posts:[
        {id: 1, message: "My new post", likeCount: "15"},
        {id: 2, message: "My second post", likeCount: "11"},
        {id: 3, message: "Hi, everyone", likeCount: "18"},
        {id: 4, message: "Hello", likeCount: "21"},
        {id: 5, message: "How are you?", likeCount: "55"}
    ],
    isFetching: false,
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_PROFILE_DATA:
            return {
                ...state,
                profileData: {...action.profileData}
                // profileData: {
                //     ...action.profileData,
                //     contacts: {...action.profileData.contacts},                    
                //     photos: {...action.profileData.photos}
                // }
            };
        case SET_STATUS:
            return {
                ...state,
                profileStatus: action.status
            }; 
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    message: action.newPost,
                    likeCount: "0"
                }]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts].filter( post => post.id !== action.postId )
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

export const setProfileData = (profileData) => ({ type: SET_PROFILE_DATA, profileData });
export const setProfileStatus = (status) => ({ type: SET_STATUS, status });
export const addPost = (newPost) => ({ type: ADD_POST, newPost });
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const toggleFeth = (isFetching) =>({ type: TOGGLE_FETCH, isFetching });

export const getProfile = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFeth(true));
        let response = await profileAPI.getProfile(userId);
        dispatch(setProfileData(response));
        dispatch(toggleFeth(false));
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFeth(true));
        let response = await profileAPI.getStatus(userId);
        dispatch(setProfileStatus(response));
        dispatch(toggleFeth(false));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        dispatch(toggleFeth(true));
        let response = await profileAPI.updateStatus(status);
        if ( response.data.resultCode === 0 ) {
            dispatch(setProfileStatus(status));
        }
        dispatch(toggleFeth(false));
    }
}

export default profileReducer;