import React from 'react';
import Preloader from '../../preloader/preloader';
import Paginator from '../../../Assets/Paginator/Paginator';
import User from './User';

const Users = (props) => {

        console.log("props from Users: ", props)
        
        return (
            <div>
                { props.isFetching ? <Preloader /> : null }

                <Paginator currentPage={props.currentPage} totalCount={props.totalCount} pageSize={props.pageSize} changePage={props.changePage} />

                { props.users.map( u => ( <User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow} />) )}
            </div>
        )
};

export default Users;