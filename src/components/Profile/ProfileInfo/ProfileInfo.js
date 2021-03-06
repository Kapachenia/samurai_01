import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Proloader";

const ProfileInfo = (props) => {
    // показывает preloader, если profile нет. profile загружен контейнерной компонентой Profile
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.profile_ava}>
                <img src='https://montegrappa.com.ua/wp-content/uploads/2019/03/Samurai-Banner-1200x400.png'></img>
            </div>
            <div className={classes.descriptionBlok}>
                {/*src достанем из профиля*/}
                <img src={props.profile.photos.large}/>
                ava + deescription
            </div>
        </div>
    )
}

export default ProfileInfo;