import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profile_reducer'
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState()


  const addPost = () => {
    let action = addPostActionCreator()
    props.store.dispatch(action);
  }

  const onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text)
    props.store.dispatch(action);
  }

  return (
    <MyPosts updateNewPostTextActionCreator={onPostChange}  addPostActionCreator={addPost} 
    postData={state.profilePage.postData} 
    newPostText={state.profilePage.newPostText} />
  );
}

export default MyPostsContainer;