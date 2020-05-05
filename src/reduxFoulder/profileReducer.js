const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts:[
        {id: 1, message: "My new post", likeCount: "15"},
        {id: 2, message: "My second post", likeCount: "11"},
        {id: 3, message: "Hi, everyone", likeCount: "18"},
        {id: 4, message: "Hello", likeCount: "21"},
        {id: 5, message: "How are you?", likeCount: "55"}
    ],
    newPostText: "new PostText"
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateTextPostActionCreator = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT , newText: text });
    
export default profileReducer;