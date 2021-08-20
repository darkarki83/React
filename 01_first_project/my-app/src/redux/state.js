let store = {
    _rerenderEntireTree() {
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
    addPost () {
        let newPost = {
            id: 5,
            msg: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPostText = ''
        console.log(this._state.profilePage.newPostText)
        this._rerenderEntireTree(this._state)
    },
    updateNewPostText(newText) {
        //console.log(newText)
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state)
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    //window.state = this._state

}

export default store;