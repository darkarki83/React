import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsData = [
    { id: 1, name: 'Katia' },
    { id: 2, name: 'Vova' },
    { id: 3, name: 'Sasha' },
    { id: 4, name: 'Pasha' },
    { id: 5, name: 'Nikita' }
  ];

  let messagesData = [
    { id: 1, msg: 'Hi' },
    { id: 2, msg: 'How are you' },
    { id: 3, msg: 'Hi artkdev' },
    { id: 4, msg: 'yo yo' }
  ];

  let dialogsElements = dialogsData.map( (d) => {
    return <DialogItem id={d.id} name={d.name} />
  });

  let messagesElements = messagesData.map( (m) => <Message message={m.msg} /> );

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