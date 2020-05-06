import React from 'react';
import Messages from './Messages.jsx';
import {addMessage, updateNewMessage} from './../../../reduxFoulder/messagesReducer.js';
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


let mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
        dialogs: state.messagesPage.dialogs,
    }
};

const MessagesContainer = connect(mapStateToProps, { addMessage, updateNewMessage })(Messages);

export default MessagesContainer;