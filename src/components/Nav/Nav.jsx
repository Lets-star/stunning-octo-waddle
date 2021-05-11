import React from "react";
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

// let sample = {
//   'nav' : 'navbar__4gyaUj'
//   'item' : 'item__765fFh'
// }

// let c1 ='item'
// let c2 = 'active'
// 'item active'
// let classes =c1 +' 'c2

// let activeItem = `${classes.item} ${classes.active}`

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.activeLink}>Profile </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/sidebar' activeClassName={classes.activeLink}>Sidebar</NavLink>
            </div>
        </nav>
    );
};
export default Nav;
