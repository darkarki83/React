const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, msg: 'Hi how are you', likesCount: 121},
        {id: 2, msg: 'Its my first post', likesCount: 19},
        {id: 3, msg: 'Yo yo yo', likesCount: 250},
        {id: 4, msg: 'Next level', likesCount: 1589}
      ],
    newPostText: 'ArtKDev'
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                msg: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            debugger;
            stateCopy.postData = [...state.postData]
            stateCopy.postData.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.text;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })  
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text })

export default profileReducer;
