import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="http://beloweb.ru/wp-content/uploads/2015/11/Wood-textures21-800x297.jpg"></img>
            </div>
            <div className={s.description}>
                ava + descr
            </div>
        </div>
    )
};

export default ProfileInfo;