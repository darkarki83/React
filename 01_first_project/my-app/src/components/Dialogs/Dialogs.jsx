import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageActionCreator, addMessageActionCreator } from './../../redux/state'

const Dialogs = (props) => {

  let messageElement = React.createRef();

  const addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }

  const onMessageChange = () => {
    let message = messageElement.current.value
    props.dispatch(updateNewMessageActionCreator(message))
  }

  let dialogsElements = props.dialogsPage.dialogsData.map( (d) => {
    return <DialogItem id={d.id} name={d.name} />
  });

  let messagesElements = props.dialogsPage.messagesData.map( (m) => <Message message={m.msg} /> );

  return (
    <div className={s.dialogs}>
      <div>
        <div className={s.dialogsItems}>
          { dialogsElements }
        </div>
        <div>
          <textarea onChange={ onMessageChange } ref={messageElement} value={props.dialogsPage.newDialogText}></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>  
      </div>

      <div className={s.messages}>
        { messagesElements }
      </div>
    </div>
  );
}

export default Dialogs;