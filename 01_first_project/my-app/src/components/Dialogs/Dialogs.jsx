import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let messageElement = React.createRef();

  const onButtonClick = () => {
    let mess = messageElement.current.value;
    console.log(mess)
  }

  let dialogsElements = props.state.dialogsData.map( (d) => {
    return <DialogItem id={d.id} name={d.name} />
  });

  let messagesElements = props.state.messagesData.map( (m) => <Message message={m.msg} /> );

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
      </div>
      <textarea ref={messageElement}></textarea>
      <button onClick={onButtonClick}>add message</button>
    </div>
  );
}

export default Dialogs;