import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profile_reducer'
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer> 
      { (store) => {
        let state = store.getState()


      const addPost = () => {
        let action = addPostActionCreator()
        store.dispatch(action);
      }
    
      const onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        store.dispatch(action);
      }
    
      return <MyPosts updateNewPostTextActionCreator={onPostChange}    addPostActionCreator={addPost} 
        postData={state.profilePage.postData} 
        newPostText={state.profilePage.newPostText} />
      }
    } 
    </StoreContext.Consumer>
  );
}

export default MyPostsContainer;