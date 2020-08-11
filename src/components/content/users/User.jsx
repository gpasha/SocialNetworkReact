import React from 'react';
import './User.css';
import userPhoto from './../../../Assets/img/userProfile.png';
import { Link  } from 'react-router-dom';

const User = ( props ) => {
        console.log("props from Users: ", props)
        let u = props.user;
        
        return (
            <div className="user" >
                <div className="user__left">
                    <Link  to={"/profile/" + u.id} key={u.id}>
                        <div className="user__img">
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className="user__photo"></img>
                        </div>
                    </Link >
                    <div className="user__followwed">
                        { u.followed 
                            ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                            : <button id={u.id}  onClick={ () => { props.follow(u.id) }}>follow</button> }
                    </div>
                </div>
                <div className="user__right"> 
                    <div className="user__content">
                        <div className="user__fullname">                 
                            {u.name}
                        </div>
                        <div className="user__status">                
                            {u.status}
                        </div>
                    </div>
                    <div className="user__location">
                        <div className="user__city">
                            {/* {u.location.city}                   */}
                        </div>
                        <div className="user__country">
                            {/* {u.location.country}            */}
                        </div>
                    </div>      
                </div>
            </div>
        )
}

export default User;