import React from 'react';
import s from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';


const Navbar = (props) => {
  let friendsElements = props.friends.map( (f) => {
    return <Friends name={f.name} key={f.id} />
  })

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <br />
      <div className={`${s.item} ${s.super}`}>
        <NavLink to="/setting" activeClassName={s.activeLink}>Settings</NavLink>
      </div>
      <br /><br /><br /><br />
      <h3 className={s.center}>
        Friends
      </h3>
      <div>
        {friendsElements}
      </div>
    </nav>
  );
}

export default Navbar;