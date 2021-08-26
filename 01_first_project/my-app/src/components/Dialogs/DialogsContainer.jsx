import React from 'react';
import s from "./Dialogs.module.css";
import { updateNewMessageActionCreator, addMessageActionCreator } from './../../redux/dialogs_reducer'
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState()
  
  const addMessage = () => {
    let action = addMessageActionCreator()
    props.store.dispatch(action)
  }

  const onMessageChange = (message) => {
    let action = updateNewMessageActionCreator(message)
    props.store.dispatch(action)
  }

  return (
    <Dialogs addMessageActionCreator={addMessage}
    updateNewMessageActionCreator={onMessageChange}
    dialogsData={state.dialogsPage.dialogsData}
    messagesData={state.dialogsPage.messagesData}
    newDialogText={state.dialogsPage.newDialogText}

    />
  );
}

export default DialogsContainer;