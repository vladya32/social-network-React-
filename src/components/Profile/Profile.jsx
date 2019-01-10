import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
    <div>
        <div>
            <img src="http://beloweb.ru/wp-content/uploads/2015/11/Wood-textures21-800x297.jpg"></img>
        </div>
        <div>
            ava + descr
        </div>
        <MyPosts />
    </div>
    )
}

export default Profile;
