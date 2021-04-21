import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.profile_ava}>
                <img src='https://montegrappa.com.ua/wp-content/uploads/2019/03/Samurai-Banner-1200x400.png'></img>
            </div>
            <div className={classes.descriptionBlok}>
                ava + deescription
            </div>
        </div>
    )
}

export default ProfileInfo;