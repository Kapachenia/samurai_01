import React from "react";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true

};

// reducer - это функция, через которую идёт модификация state

// UI может меняться от изменёного state. пользователь жмёт кнопку, мы dispatch action в state,
// reducer этот action обрабатывает, state меняется и идёт перерисовка UI.

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
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        // делаем копию state и подменяем те свойства, которые нужно заменить users, currentPage, totalUsersCount
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        default:
            return state;

    }
}

// action creator - чистая функция, которая возвращает action

export const follow = (userId) =>  ({ type: FOLLOW, userId })

export const unfollow = (userId) => {
    return { type: UNFOLLOW, userId }
}
// юзеров получаем из вне и можем засетать
export const setUsers = (users) => {
    return { type: SET_USERS, users}
}
// можем изменить текущую страничку
export const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage}
}
// установить общее значение пользователей
export const setTotalUsersCount = (totalUsersCount) => {
    return { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount}
}
// action - это объект у которого есть как минимум свойство type, а так же свойства, которые нужны reduserу для обработки actiona
// reducer из actiona достаёт isFetching (action.isFetching), мы должны это свойство сформировать. Формируем isFetching
export const toggleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching}
}

export default usersReducer;