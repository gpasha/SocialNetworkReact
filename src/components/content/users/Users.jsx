import React from 'react';
import './Users.css';
import * as axios from 'axios';
import userPhoto from './../../../Assets/userProfile.png';

const Users = (props) => {

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then( (response) => {
        if ( props.users.length === 0 ) {
            console.log("response.data.items: ", response.data.items);
            props.setUsers(response.data.items);
        }
    });

    
   
    // if ( props.users.length === 0 ) {
    //     props.setUsers([
    //         {id: 1, followed: true, photoUrl: 'https://vokrug.tv/pic/news/9/f/4/6/9f466307ab9f357c0db710631834bc95.jpg', fullName: "Dmitriy", status: "I am free", location: {city: "Minsk", country: "Belarus"}},
    //         {id: 2, followed: false, photoUrl: 'https://vokrug.tv/pic/news/9/f/4/6/9f466307ab9f357c0db710631834bc95.jpg', fullName: "Maxim", status: "I am free too", location: {city: "Moscow", country: "Russia"}},
    //         {id: 3, followed: true, photoUrl: 'https://vokrug.tv/pic/news/9/f/4/6/9f466307ab9f357c0db710631834bc95.jpg', fullName: "Svetlana", status: "I am in relation", location: {city: "Grodno", country: "Belarus"}},
    //     ]);
    // }

    return props.users.map( u => {
        return (
            <div className="user" key={u.id}>
                <div className="user__left">
                    <div className="user__img">
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className="user__photo"></img>
                    </div>
                    <div className="user__followwed">
                        { u.followed  ? <button onClick={() => props.unfollow(u.id)}>unfollow</button> : <button id={u.id}  onClick={ () => props.follow(u.id)}>follow</button> }
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
    });
}

export default Users;