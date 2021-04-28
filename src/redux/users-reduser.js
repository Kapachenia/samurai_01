import React from "react";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [
    ]
};

// reduser - это функция, через которую идёт модификация state

// UI может меняться от изменёного state. пользователь жмёт кнопку, мы dispatch action в state,
// reduser этот action обрабатывает, state меняется и иедёт перерисовка UI.

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
// Меняем один из элементов массива.
// .map возвращает новый массив на основе старого массива. Пробегаем по массиву users

// проходим по id, возвращаем его, если не поменялся, если его нужно поменять, то меняем false на true
            return {
                ...state, users: state.users.map(u => {
// если userID пробегаемого с помощью .map равен userID, которого нужно зафоловить (он сидит в action),
// то мы должны скопировать пользователя, поменять followed на true и вернуть его копию
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
// если userID пробегаемого с помощью .map равен userID, которого нужно зафоловить (он сидит в action),
// то мы должны скопировать пользователя, поменять followed на true и вернуть его копию
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
// старый state перезатираем users, которые пришли через action
        case SET_USERS:{
            return {
                ...state, users: [...state.users, ...action.users]}
            }
        default:
            return state;

    }
}

// action creator - чистая функция, которая возвращает action

export const followAC = (userId) => {
    return {
        type: FOLLOW, userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS, users
    }
}

export default usersReducer;