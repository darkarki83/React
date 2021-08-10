import React from 'react';
import s from "./Navbar.module.css";


const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="/dialogs">Messages </a>
      </div>
      <div className={s.item}>
        <a href="/news">News</a>
      </div>
      <div className={s.item}>
        <a href="/music">Music</a>
      </div>
      <br />
      <div className={`${s.item} ${s.super}`}>
        <a href="/setting">Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;