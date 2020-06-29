import React from 'react';
import './Messages.css';
import Message from './message/Message.jsx';
import { Field, reduxForm  } from 'redux-form';
import { Textarea } from '../../../Assets/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../../utils/Validations/Validations';

const Messages = (props) => {
    
    let messagesElements = props.messages.map( m => <Message key={m.id} message={m.message}/>);

    let addMessage = ({newMessage}) => {
        props.addMessage(newMessage);
    }

    let maxLength60 = maxLengthCreator(60);

    const NewMessageForm = (props) => {
        const { handleSubmit } = props
        return (
            <form onSubmit={handleSubmit}>
                <Field name="newMessage" component={Textarea}
                    validate={[required, maxLength60]} />
                <button>Send Message</button>
            </form>
        )
    }

    let NewReduxMessageForm = reduxForm({
        form: 'newMessage'
    })(NewMessageForm)

    return (
        <div className="communication">
            <div className="messages">
                { messagesElements }        
                <NewReduxMessageForm onSubmit={addMessage}/>
            </div>
        </div>
    )
}

export default Messages;