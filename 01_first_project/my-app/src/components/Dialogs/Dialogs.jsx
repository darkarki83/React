import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsData.map( (d) => {
    return <DialogItem id={d.id} name={d.name} />
  });

  let messagesElements = props.messagesData.map( (m) => <Message message={m.msg} /> );

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
      </div>
    </div>
  );
}

export default Dialogs;