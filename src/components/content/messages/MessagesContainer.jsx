import React from 'react';
import Messages from './Messages.jsx';
import {addMessageActionCreator, updateNewMessageActionCreator} from './../../../reduxFoulder/messagesReducer.js';
import { connect } from 'react-redux';

// const MessagesContainer = (props) => {

//     let state = props.store.getState();
//     let messages = state.messagesPage.messages;
//     let newMessageText = state.messagesPage.newMessageText;
//     let dialogs = state.messagesPage.dialogs;

//     let addMessage = () => {
//         props.store.dispatch(addMessageActionCreator());
//     }

//     let changeMessage = (value) => {  
//         props.store.dispatch(updateNewMessageActionCreator(value));
//     }

//     return <Messages addMessage={addMessage} changeMessage={changeMessage} dialogs={dialogs} messages={messages} newMessageText={newMessageText} />
// }


let f1 = (state) => {
    return {
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
        dialogs: state.messagesPage.dialogs,
    }
};

let f2 = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        changeMessage: (value) => {
            dispatch(updateNewMessageActionCreator(value))
        }
    }
}

const MessagesContainer = connect(f1, f2)(Messages);

export default MessagesContainer;