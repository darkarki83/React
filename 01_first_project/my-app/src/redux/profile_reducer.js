const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                msg: state.newPostText,
                likesCount: 0
            }
            state.postData.push(newPost)
            state.newPostText = ''
            break
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            break
        
    }
    return state;
}

export const addPostActionCreator = () => ({ type: ADD_POST })  
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text })

export default profileReducer;
