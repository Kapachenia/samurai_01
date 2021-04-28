import React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reduser";
import Users from "./Users";

// функция, которая принимает весь state приложения и возвращает объект только с теми данными,
// которые нам из state нужны

// с помощью mapStateToProps придёт в функциональную компоненту в props, будет сидеть свойство users
// значением которой будут пользователи из state

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

// функция служит для передачи дочерней, презентационной компоненте, через props, call back

let mapDispatchToProps = (dispatch) => {
    return {
        // функция, которая будет диспатчить результат работы action creator (action)
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;