import React from 'react';
import './Message.css';

const Message = (props) => {
    return (
        <div className="message" key={props.id}>{props.message}</div>
    )
}

export default Message;