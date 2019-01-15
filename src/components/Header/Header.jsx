import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.main_header} >
            <h1 className={s.logo}>Logo</h1>
        </header >
    )
}

export default Header;