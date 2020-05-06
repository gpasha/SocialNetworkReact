import React from 'react';
import './Users.css';
import userPhoto from './../../../Assets/img/userProfile.png';
import { Link  } from 'react-router-dom';

const Users = (props) => {

        let pagesCount = Math.ceil( props.totalCount / props.pageSize );
        let pages = [];
    
        for ( let i = 1; i <= pagesCount; i++ ) {
            if ( i > pagesCount - 10 ) {
                pages.push(i);
            }
            // else {
            //     break
            // }
        }

        return (
            <div>
                <div className="pagination">
                    {
                        pages.map( p => {
                            return <span key={p} className={ props.currentPage === p ? "pagination__item pagination__item_active" : "pagination__item" } onClick={ () => props.changePage(p)}>{p}</span>
                        })
                    }
                </div>
                {props.users.map( u => {
                        return (
                            <Link  to={"/profile/" + u.id} key={u.id}>
                                <div className="user" >
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
                            </Link >
                        )
                    })}
            </div>
        )
}

export default Users;