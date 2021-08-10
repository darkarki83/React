import React from 'react';
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>
              Katia
            </div>
            <div className={s.dialog}>
              Vova
            </div>
            <div className={s.dialog}>
              Sasha
            </div>
            <div className={s.dialog}>
              Pasha
            </div>
            <div className={s.dialog}>
              Nikita
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