import React from 'react';
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>
              <NavLink to="/dialogs/1"> Katia </NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to="/dialogs/2"> Vova </NavLink>
            </div>
            <div className={s.dialog}>
              <NavLink to="/dialogs/3"> Sasha </NavLink>
            </div>
            <div className={s.dialog}>
              <NavLink to="/dialogs/4"> Pasha </NavLink>
            </div>
            <div className={s.dialog}>
              <NavLink to="/dialogs/5"> Nikita </NavLink>
            </div>
          </div>
          <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How are you</div>
            <div className={s.message}>Hi artkdev</div>
            <div className={s.message}>yo yo</div>
          </div>
      </div>
    );
}

export default Dialogs;