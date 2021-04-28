import React from "react";
import classes from './Users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/images/user.jpg';

class Users extends React.Component {
    // компонента была вмонтирована
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }
    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={classes.userPhoto}></img>
                    </div>
                    {/*Когда по кнопке кликнут, отработает call back функция и передай id*/}
                    {u.followed ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button> :
                        // когда по кнопке кликнут вызове анонимную стрелочную функцию () => { props.follow(u.id) }
                        // внутри стрелочной функции обращение к props из props берётся unfollow и передаётся id
                        <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Follow</button>}
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