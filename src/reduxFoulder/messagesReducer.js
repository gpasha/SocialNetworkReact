const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: state.messages.length + 1,
                    message: state.newMessageText
                }],
                newMessageText: ""
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            };
        default:
            return state;
    }

}

export const addMessage = () => ({ type: ADD_MESSAGE });
export const updateNewMessage = (text) => 
    ({ type: UPDATE_NEW_MESSAGE_TEXT , newMessage: text });

export default messagesReducer;