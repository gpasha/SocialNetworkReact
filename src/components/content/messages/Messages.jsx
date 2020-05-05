import React from 'react';
import './Messages.css';
import Message from './message/Message.jsx';

const Messages = (props) => {
    
    let messagesElements = props.messages.map( m => <Message message={m.message}/>);

    let addMessage = () => {
        props.addMessage();
    }

    let changeMessage = (event) => {
        let newMesaage = event.target.value;        
        props.changeMessage(newMesaage);
    }

    return (
        <div className="communication">
            <div className="messages">
                { messagesElements }        
                <div>
                    <textarea value={props.newMessageText} onChange={changeMessage}></textarea>
                    <button onClick={addMessage}>Send Message</button>
                </div>    
            </div>
        </div>
    )
}

export default Messages;