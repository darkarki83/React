const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';





let store = {
    _callSubscriber() {
        console.log("ArtKDev")
    },
    _state : {
        profilePage : {
            postData : [
                {id: 1, msg: 'Hi how are you', likesCount: 121},
                {id: 2, msg: 'Its my first post', likesCount: 19},
                {id: 3, msg: 'Yo yo yo', likesCount: 250},
                {id: 4, msg: 'Next level', likesCount: 1589}
              ],
            newPostText: 'ArtKDev'
        },
        dialogsPage : {
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
        },
        friendsBar : {
            friends : [
                { id: 1, name: "Den" },
                { id: 2, name: "Uri" },
                { id: 3, name: "Art" }
            ]
        }
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {   // { type: 'What need to do?'}
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5,
                msg: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            //console.log(this._state.profilePage.newPostText)
            this._callSubscriber(this._state)
        }
        else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state)
        }
        else if(action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 5,
                msg: this._state.dialogsPage.newDialogText
            }
            this._state.dialogsPage.messagesData.push(newMessage)
            this._state.dialogsPage.newDialogText = ''
            console.log(this._state.dialogsPage.newDialogText)
            this._callSubscriber(this._state)
        }
        else if(action.type === UPDATE_NEW_DIALOG_TEXT) {
            this._state.dialogsPage.newDialogText = action.message;
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
  
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text })

export const addMessageActionCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageActionCreator = (message) => ({ type: UPDATE_NEW_DIALOG_TEXT, message: message })

export default store;
window.store = store 