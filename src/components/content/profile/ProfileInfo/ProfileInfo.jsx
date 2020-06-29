import React from 'react';
import './ProfileInfo.css';

class ProfileInfo extends React.Component {

    state = {
        editMode: false,
        status: this.props.profileStatus
    }

    activateEditMode = () => {
        this.setState({
            editMode:  true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode:  false
        });
        this.props.updateStatus(this.state.status);
    }
    
    updateStatusText = (e) => {
        this.setState({
            status: e.target.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if ( prevProps.status !== this.props.status ) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        // console.log("this.state: ", this.state);
        // console.log("this.props.profile: ", this.props.profileData);
        
        if ( !this.props.profileData ) {
            return null;
        }
        return (
            <div className="profile-info">
                <div className="profile-info__img-block">
                    <img className="profile-info__photo" src={this.props.profileData.photos.large}/>
                </div>
                <div className="profile-info__content-block">
                    <div className="profile-info__name">{this.props.profileData.fullName}</div>
                    <div className="profile-info__content">
                        <div className="profile-info__content-title">Profile information</div>  
                        { !this.state.editMode &&
                            <div className="profile-info__content-status" onDoubleClick={this.activateEditMode} >{this.props.profileStatus || 'no status'}</div> 
                        }
                        { this.state.editMode &&                                        
                            <div className="profile-info__content-status">
                                <input  value={this.state.status}
                                        onChange={this.updateStatusText}
                                        onBlur={this.deactivateEditMode}
                                        autoFocus={true} />
                            </div>
                        }
                        <div className="profile-info__item">
                            <div className="profile-info__item-name">Status</div>
                            <div className="profile-info__item-value">
                                {this.props.profileData.aboutMe}
                            </div>
                        </div>
                        <div className="profile-info__item">
                            <div className="profile-info__item-name">facebook</div>
                            <div className="profile-info__item-value">
                            <a href={this.props.profileData.contacts.vk} target="_blank"> {this.props.profileData.contacts.facebook} </a>
                            </div>
                        </div>
                        <div className="profile-info__item">
                            <div className="profile-info__item-name">vk</div>
                            <div className="profile-info__item-value">
                                <a href={this.props.profileData.contacts.vk} target="_blank"> {this.props.profileData.contacts.vk} </a>
                            </div>
                        </div>
                        <div className="profile-info__item">
                            <div className="profile-info__item-name">twitter</div>
                            <div className="profile-info__item-value">
                                <a href={this.props.profileData.contacts.twitter} target="_blank"> {this.props.profileData.contacts.twitter} </a>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }    
}

export default ProfileInfo;