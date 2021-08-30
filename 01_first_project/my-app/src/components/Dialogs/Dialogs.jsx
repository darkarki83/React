import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let messageElement = React.createRef();

  const addMessage = () => {
    props.addMessageActionCreator()
  }

  const onMessageChange = () => {
    let message = messageElement.current.value
    props.updateNewMessageActionCreator(message)
  }

  let dialogsElements = props.dialogsData.map( (d) => {
    return <DialogItem id={d.id} key={d.id} name={d.name} />
  });

  let messagesElements = props.messagesData.map( (m) => <Message message={m.msg} key={m.id} /> );

  return (
    <div className={s.dialogs}>
      <div>
        <div className={s.dialogsItems}>
          { dialogsElements }
        </div>
        <div>
          <textarea onChange={ onMessageChange } ref={messageElement} value={props.newDialogText}></textarea>
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