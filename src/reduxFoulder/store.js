import navigationReducer from './navigationReducer.js';
import profileReducer from './profileReducer.js';
import messagesReducer from './messagesReducer.js';

let store = {
    _state: {
        profilePage: {
            posts:[
                {id: 1, message: "My new post", likeCount: "15"},
                {id: 2, message: "My second post", likeCount: "11"},
                {id: 3, message: "Hi, everyone", likeCount: "18"},
                {id: 4, message: "Hello", likeCount: "21"},
                {id: 5, message: "How are you?", likeCount: "55"}
            ],
            newPostText: "new PostText"
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: "Andrey"},    
                {id: 2, name: "Sasha"},
                {id: 3, name: "Polina"},
                {id: 4, name: "Denis"}
            ],
            messages:[
                {id: 1, message: "Hi!"},
                {id: 2, message: "Hello!"},
                {id: 3, message: "How are you?"},
                {id: 4, message: "I am fine!"},
                {id: 5, message: "and YOU?"},
                {id: 6, message: "good!"}
            ],
            newMessageText: "new message text ..."
        },
        navigation: {}
    },
    _callSubscriber() {
        console.log("render page!");
    },
    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.navigation = navigationReducer(this._state.navigation, action);

        this._callSubscriber(this._state);
    }
}

export default store;