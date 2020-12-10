import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';

console.log(s)

function Navbar() {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.activeLink} >Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/dialogs'}>Messages</NavLink>
            </div>
            <div className={s.item} >
                <NavLink to={'/news'} activeClassName={s.activeLink} >News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} >Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'} >Settings</NavLink>
            </div>
        </div>
    )
}

export default Navbar;