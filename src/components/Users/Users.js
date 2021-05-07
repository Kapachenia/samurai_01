import React from "react";
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    // pagesCount заменил на 5
    for (let i = 1; i <= 10; i++) {
        // масив pages заполним .push значениями i
        pages.push(i);
    }
// по pages можем пробежаться .map. внутри map приходит страничка
// если currentPage равна текущей странице p, то добавляется класс selectedPage
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage}
                    // хотим засетать CurrentPage. Итерируемся по p и она будет текущей страничкой
                    // при нажатии на кнопку нужно поменять CurrentPage
                    // обработчик событий аномимная функция. Кнопка вызовет функцию и передаст е
                    // мы внутри обработчика вызовем наш метод this.onPageChanged(p) и передадим p
                    // наш метод не вызовется, пока не вызовется анонимная функция. Анонимная функция вызовется при клике на span

                             onClick={(е) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={classes.userPhoto}></img>
                        </NavLink>
                    </div>
                    <div>
                        {/*При нажатии на кнопку вызывается анонимная функция. При нажатии на кнопку мы из props вызываем call back follow unfollow*/}
                        {/*Когда по кнопке кликнут, отработает call back функция и передай id*/}
                        {u.followed ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {withCredentials: true,
                                        headers: {"API-KEY": "716f1b8b-bc85-4d85-b00e-40338217278b"}}).then(response => {
                                    // если resultCode = 0, значит сервер подтвердил, что подписка произошла
                                    if (response.data.resultCode == 0) {
                                        // если подписка произошла, то мы в этом случае должны задиспатчить в reducer, вызвать call back
                                        props.unfollow(u.id);
                                    }
                                });
                            }}>Unfollow</button>
                            // когда по кнопке кликнут вызове анонимную стрелочную функцию () => { props.follow(u.id) }
                            // внутри стрелочной функции обращение к props, из props берётся unfollow и передаётся id
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {withCredentials: true,
                                headers: {"API-KEY": "716f1b8b-bc85-4d85-b00e-40338217278b"}}).then(response => {
                                if (response.data.resultCode == 0) {
                                props.follow(u.id);
                            }
                            });
                            }}>Follow</button>}
                        {/*follow unfollow - это action creator. Находятся в UserContainer, где connect создал  call back функцию
                            в которой он вызывает fallow action creator потом action creator возвращает action и потом action диспатчется*/}
                </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

// [
//     {id: 1, photoUrl: 'https://icon-library.com/images/samurai-icon/samurai-icon-8.jpg',
//         followed: false, fullName: 'Yauheni', status: 'Hello', location: {city: 'Minsk', country: 'Belarus'}},
//     {id: 2, photoUrl: 'https://icon-library.com/images/samurai-icon/samurai-icon-8.jpg',
//         followed: true, fullName: 'Yauheni', status: 'Hello', location: {city: 'Minsk', country: 'Belarus'}},
//     {id: 3, photoUrl: 'https://icon-library.com/images/samurai-icon/samurai-icon-8.jpg',
//         followed: false, fullName: 'Yauheni', status: 'Hello', location: {city: 'Minsk', country: 'Belarus'}},
// ]

export default Users;