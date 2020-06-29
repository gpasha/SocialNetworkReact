const ADD_MESSAGE = "ADD_MESSAGE";

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
    ]
};

const messagesReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: state.messages.length + 1,
                    message: action.newMessage
                }]
            }
        default:
            return state;
    }

}

export const addMessage = (newMessage) => ({ type: ADD_MESSAGE, newMessage });

export default messagesReducer;