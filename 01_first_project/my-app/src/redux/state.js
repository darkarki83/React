import { rerenderEntireTree } from "../render"

let state = {
    profilePage : {
        postData : [
            {id: 1, msg: 'Hi how are you', likesCount: 121},
            {id: 2, msg: 'Its my first post', likesCount: 19},
            {id: 3, msg: 'Yo yo yo', likesCount: 250},
            {id: 4, msg: 'Next level', likesCount: 1589}
          ]
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
} 

export const addPost = (_message) => {
    let newPost = {
        id: 5,
        msg: _message,
        likesCount: 0
    }
    state.profilePage.postData.push(newPost)
    rerenderEntireTree(state)

}

export default state;