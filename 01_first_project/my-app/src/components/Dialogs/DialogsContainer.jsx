import React from 'react';
import s from "./Dialogs.module.css";
import { updateNewMessageActionCreator, addMessageActionCreator } from './../../redux/dialogs_reducer'
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
  
  return <StoreContext.Consumer> 
    { store => {
      let state = store.getState()
  
      const addMessage = () => {
        let action = addMessageActionCreator()
        store.dispatch(action)
      }
    
      const onMessageChange = (message) => {
        let action = updateNewMessageActionCreator(message)
        store.dispatch(action)
      }
      return <Dialogs addMessageActionCreator={addMessage}
        updateNewMessageActionCreator={onMessageChange}
        dialogsData={state.dialogsPage.dialogsData}
        messagesData={state.dialogsPage.messagesData}
        newDialogText={state.dialogsPage.newDialogText} />
    }
  }
  </StoreContext.Consumer>
}

export default DialogsContainer;