import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import friendsBarReducer from './friendsbar_reducer';


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
        this._state.profilePage = profileReducer(this._state.profilePage, action )
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.friendsBar = friendsBarReducer(this._state.friendsBar, action)

        this._callSubscriber(this._state)
    
    }
}

export default store;
window.store = store 