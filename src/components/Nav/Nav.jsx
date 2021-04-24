import React from "react";
import classes from './Nav.module.css';

// let sample = {
//   'nav' : 'navbar__4gyaUj'
//   'item' : 'item__765fFh'
// }

// let c1 ='item'
// let c2 = 'active'
// 'item active'
// let classes =c1 +' 'c2

let activeItem = `${classes.item} ${classes.active}`

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className = {activeItem}>
        <a>Profile</a>
      </div>
      <div className = {classes.item}>
        <a>Messages</a>
      </div>
      <div className = {classes.item}>
        <a>News</a>
      </div>
      <div className = {classes.item}>
        <a>Music</a>
      </div>
      <div className = {classes.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};
export default Nav;
