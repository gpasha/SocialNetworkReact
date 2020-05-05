import React from "react";
import s from "./Post.module.css"

let Post = (props) => {
    return [        
        <div className={s.post}>
            <img className={s.post__image} src="https://cdn.pixabay.com/photo/2020/01/05/17/37/mountains-4743678_960_720.jpg" />
            <div className={s.post__text}> {props.message} </div>
            <div className={s.post__likes}> Likes: {props.likes} </div>
        </div>
    ]
}

export default Post;