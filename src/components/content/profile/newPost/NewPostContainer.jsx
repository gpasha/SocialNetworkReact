import React from 'react';
import NewPost from './NewPost';
import {addPost, updateTextPost} from '../../../../reduxFoulder/profileReducer.js'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const NewPostContainer = connect(mapStateToProps, { addPost, updateTextPost })(NewPost);

export default NewPostContainer;