// import { createSelector } from "reselect";

export const getAllUsers = (state) => {
    return state.usersPage.users;
}

// export const getAllUsersSuper = createSelector( [ getAllUsers ], (users) => {
//     return users.filter( s => true );
// });

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalCount = (state) => {
    return state.usersPage.totalCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getFetching = (state) => {
    return state.usersPage.isFetching
}