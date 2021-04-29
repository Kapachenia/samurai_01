import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/users-reduser";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
// компонента вмонтируется на страницу один раз
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&
        count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                // из компоненты UI отправляем в state, для этого нужен call back. call back передают через props
                // call back, который меняет что-то в state к нам приходит через mapDispatchToProps
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        // В props на момент клика будет старое значение, по этому номер страницы возмям из pageNumber
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&
        count=${this.props.pageSize}`)
            .then(response => {this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <Users totalUsersCount = { this.props.totalUsersCount }
                      pageSize = { this.props.pageSize }
                      currentPage = { this.props.currentPage }
                      onPageChanged = { this.onPageChanged }
                      users = { this.props.users }
                      follow = { this.props.follow }
                      unfollow = { this.props.unfollow }
        />
    }
}

// функция, которая принимает весь state приложения и возвращает объект только с теми данными,
// которые нам из state нужны

// с помощью mapStateToProps придёт в функциональную компоненту в props, будет сидеть свойство users
// значением которой будут пользователи из state

// через mapStateToProps контейнерная компонента внедряет users, через props в компоненту Users
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        // прокинем pageSize, totalUsersCount, currentPage в компоненту
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

// функция служит для передачи дочерней, презентационной компоненте, через props, call back
// Хоти получить call back, который диспатчет что-то из state, то мы делаем это в mapDispatchToProps
// call back, которые диспатчат что-то в state

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
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
// диспатчем результат вызова action creator. Вызов action creator всегда возвращает action
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        }
    }
}

// компонета получит props с помощью connect.
// map StateToProps возвращает объект, который из state достаёт значения, данные
// mapDispatchToProps функция возвращающая объект в котором есть call back
// каждый call back диспатчет что-то в store и заново срабатывает функция mapStateToProps
// т.к. store изменился connect вызывает mapStateToProps, что бы достать свежие props из stora

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);