import React from 'react';
import './NewPost.css';
import Post from './../post/Post.jsx';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../../utils/Validations/Validations';
import { Textarea } from '../../../../Assets/FormsControls/FormsControls';

let maxLength10 = maxLengthCreator(10);

const NewPost = React.memo((props) => {

    console.log("NewPost");
    
    let PostBlock = props.profilePage.posts.map( post => <Post key={post.id} message={post.message} likes={post.likeCount}/> );    

    let addPost = ({postText}) => {      
        props.addPost(postText);
    }

    const PostForm = (props) => {
        const { handleSubmit } = props;
        return (
            <form onSubmit={handleSubmit} >
                <Field name="postText" component={Textarea} 
                    validate={[required, maxLength10]} />
                <button>Save</button>
            </form>
        )
    }

    let PostReduxForm = reduxForm({
        form: 'addPost'
    })(PostForm);

    return (
        <div className="newPost" >
            <div className="newPost__label">My Post</div>
            <PostReduxForm onSubmit={addPost} /> 

            { PostBlock }

        </div>
    )
});

export default NewPost;