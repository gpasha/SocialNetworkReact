import React from 'react';
import "./Profile.css"
import NewPostContainer from './newPost/NewPostContainer.jsx';

const Profile = (props) => {

    return (
        <div className="profile">
            <div className="imageBlock">
                <img className="imagrBlock__image" src="https://cdn.pixabay.com/photo/2020/01/05/17/37/mountains-4743678_960_720.jpg" />
            </div>
            <div className="profileData">

            </div>

            <NewPostContainer />

        </div>
    )
}

export default Profile;