const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

let initialState = {
    dialogsData : [
        { id: 1, name: 'Akita' },
        { id: 2, name: 'Ova' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Pasha' },
        { id: 5, name: 'Nikita' }
      ],
    messagesData : [
        { id: 1, msg: 'Hi' },
        { id: 2, msg: 'How are you' },
        { id: 3, msg: 'Hi ArtKDev' },
        { id: 4, msg: 'yo yo' }
      ],
    newDialogText: 'ArtKDev'
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch(action.type) {
        case SEND_MESSAGE: 
            let newMessage = {
                id: 5,
                msg: state.newDialogText
            }
            return stateCopy = {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newDialogText: ''
            }     
        case UPDATE_NEW_DIALOG_TEXT: 
            return stateCopy = {
                ...state,
                newDialogText: action.message
            }         
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageActionCreator = (message) => ({ type: UPDATE_NEW_DIALOG_TEXT, message: message })

export default dialogsReducer;