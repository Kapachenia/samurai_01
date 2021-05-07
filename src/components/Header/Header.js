import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
        <img src='https://i.pinimg.com/originals/7f/e1/92/7fe192806e4f48dad849363337ea0f66.png'></img>
            <div className={classes.loginBlock}>
                {/*если авторизованы, то мы покажем login, в противном случае ссылку на авторизацию*/}
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
)
}

export default Header;