import React from "react";
// import {createSelector} from "reselect";

// селектор - это функция, которая принимает весь state целиком и достаёт из него то что  нужно

export const getUsers = (state) => {
    return state.usersPage.users.filter(u => true);
}

// создадим селектор с помощью специальной функции createSelector

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}

export const countSomethingDifficult = (state) => {
    debugger;
    let count = 23;
    return count;
}