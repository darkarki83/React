const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

const dialogsReducer = (state, action) => {

    switch(action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                msg: state.newDialogText
            }
            state.messagesData.push(newMessage)
            state.newDialogText = ''
            console.log(state.newDialogText)
            return state;
        case UPDATE_NEW_DIALOG_TEXT:
            state.newDialogText = action.message;
            return state;
        default:
            return state;
        
    }
}

export const addMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageActionCreator = (message) => ({ type: UPDATE_NEW_DIALOG_TEXT, message: message })

export default dialogsReducer;