const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

let initialState = {
    dialogsData : [
        { id: 1, name: 'Katia' },
        { id: 2, name: 'Vova' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Pasha' },
        { id: 5, name: 'Nikita' }
      ],
    messagesData : [
        { id: 1, msg: 'Hi' },
        { id: 2, msg: 'How are you' },
        { id: 3, msg: 'Hi artkdev' },
        { id: 4, msg: 'yo yo' }
      ],
    newDialogText: 'ArtKDev'
}

const dialogsReducer = (state = initialState, action) => {

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