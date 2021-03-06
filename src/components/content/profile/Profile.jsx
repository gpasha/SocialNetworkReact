import React from 'react';
import "./Profile.css"
import NewPostContainer from './newPost/NewPostContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <>
            <div className="profile">
                <ProfileInfo profileData={props.profileData}
                             profileStatus={props.profileStatus}
                             updateStatus={props.updateStatus} />
                <NewPostContainer />
            </div>
        </>
    )
}

export default Profile;