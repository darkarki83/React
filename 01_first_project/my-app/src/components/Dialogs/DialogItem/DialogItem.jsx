import React from 'react';
import s from "./DialogItem.module.css";
import { NavLink } from 'react-router-dom';

import logo1 from './logo1.png'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    
    return (
            <div className={s.dialog}>
              {/*<img src={logo} alt="logo" />*/}
              <NavLink to={ path } >{ props.name }</NavLink>
            </div>
    );
}

export default DialogItem;