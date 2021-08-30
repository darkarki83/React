import React from 'react';
import { connect } from 'react-redux';
import s from "./Dialogs.module.css";
import { updateNewMessageActionCreator, addMessageActionCreator } from './../../redux/dialogs_reducer'
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {

  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newDialogText: state.dialogsPage.newDialogText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessageActionCreator: () => {
      let action = addMessageActionCreator()
      dispatch(action)
    },
    updateNewMessageActionCreator: (message) => {
      let action = updateNewMessageActionCreator(message)
      dispatch(action)
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;