
const SET_PROFILE_DATA = "SET_PROFILE_DATA";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const TOGGLE_FETCH = "TOGGLE_FETCH";

let initialState = {
    profileData: null,
    posts:[
        {id: 1, message: "My new post", likeCount: "15"},
        {id: 2, message: "My second post", likeCount: "11"},
        {id: 3, message: "Hi, everyone", likeCount: "18"},
        {id: 4, message: "Hello", likeCount: "21"},
        {id: 5, message: "How are you?", likeCount: "55"}
    ],
    newPostText: "new PostText",
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
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    message: state.newPostText,
                    likeCount: "0"
                }],
                newPostText: ""
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
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

export const setProfileData = (profileData) => ({ type: SET_PROFILE_DATA, profileData });
export const addPost = () => ({ type: ADD_POST });
export const updateTextPost = (text) => ({ type: UPDATE_NEW_POST_TEXT , newText: text });
export const toggleFeth = (isFetching) =>({ type: TOGGLE_FETCH, isFetching });
    
export default profileReducer;