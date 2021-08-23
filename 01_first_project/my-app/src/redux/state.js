const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
              ]
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
            console.log(this._state.profilePage.newPostText)
            this._callSubscriber(this._state)
        }
        else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
  
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text })

export default store;
window.store = store