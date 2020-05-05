import React from 'react';
import './NewPost.css';
import Post from "./../post/Post.jsx";

const NewPost = (props) => {
    console.log("props: ", props);
    let PostBlock = props.profilePage.posts.map( post => <Post key={post.id} message={post.message} likes={post.likeCount}/> );    

    let addPost = () => {      
        props.onAddPost();
    }

    let updateTextPost = (e) => {
        let text = e.target.value;
        props.onUpdateTextPost(text);
    }

    return (
        <div className="newPost" >
            <div className="newPost__label">My Post</div> 
            <div className="newPost__textArea">
                <textarea value={props.profilePage.newPostText}
                          onChange={updateTextPost}>
                </textarea>    
            </div> 
            <div className="newPost__button">
                <button onClick={ addPost }>Save</button>
            </div>            

            { PostBlock }

        </div>
    )
}

export default NewPost;