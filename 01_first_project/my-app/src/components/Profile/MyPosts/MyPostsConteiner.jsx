import React from 'react';
import { connect } from 'react-redux';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profile_reducer'
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {

  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps =(dispatch) => {
  return {
    updateNewPostTextActionCreator: (text) => {
      let action = updateNewPostTextActionCreator(text)
      dispatch(action);
    },
    addPostActionCreator: () => {
      let action = addPostActionCreator()
      dispatch(action);
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;