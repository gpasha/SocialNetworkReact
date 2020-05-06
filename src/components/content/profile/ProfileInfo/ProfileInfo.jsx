import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = (props) => {
    
    console.log("props.profileData: ", props.profileData);
    
    let profile = props.profileData;

    if ( !profile ) {
        return null;
    }
    return (
        <div className="profile-info">
            <div className="profile-info__img-block">
                <img className="profile-info__photo" src={profile.photos.large}/>
            </div>
            <div className="profile-info__content-block">
                <div className="profile-info__name">{profile.fullName}</div>
                <div className="profile-info__content">
                    <div className="profile-info__content-title">Profile information</div>
                    <div className="profile-info__item">
                        <div className="profile-info__item-name">Status</div>
                        <div className="profile-info__item-value">
                            {profile.aboutMe}
                        </div>
                    </div>
                    <div className="profile-info__item">
                        <div className="profile-info__item-name">facebook</div>
                        <div className="profile-info__item-value">
                        <a href={profile.contacts.vk} target="_blank"> {profile.contacts.facebook} </a>
                        </div>
                    </div>
                    <div className="profile-info__item">
                        <div className="profile-info__item-name">vk</div>
                        <div className="profile-info__item-value">
                            <a href={profile.contacts.vk} target="_blank"> {profile.contacts.vk} </a>
                        </div>
                    </div>
                    <div className="profile-info__item">
                        <div className="profile-info__item-name">twitter</div>
                        <div className="profile-info__item-value">
                            <a href={profile.contacts.twitter} target="_blank"> {profile.contacts.twitter} </a>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>)

    
    
}

export default ProfileInfo;