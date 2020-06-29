import React from 'react';
import Messages from './Messages.jsx';
import {addMessage} from './../../../reduxFoulder/messagesReducer.js';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
        dialogs: state.messagesPage.dialogs
    }
};

export default compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect,
)(Messages);

