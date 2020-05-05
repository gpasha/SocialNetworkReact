import React from 'react';
import NewPost from './NewPost';
import {addPostActionCreator, updateTextPostActionCreator} from '../../../../reduxFoulder/profileReducer.js'
import { connect } from 'react-redux';

let f1 = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let f2 = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(addPostActionCreator())
        },
        onUpdateTextPost: (value) => {
            dispatch(updateTextPostActionCreator(value))
        }
    }
}

const NewPostContainer = connect(f1, f2)(NewPost);

export default NewPostContainer;