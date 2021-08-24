import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profile_reducer'



const MyPosts = (props) => {

  let postsElements = props.profilePage.postData.map( (p) => <Post message={p.msg} like={p.likesCount} />)

  let newPostElement = React.createRef()

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  const onPostChange = () => {
    let text = newPostElement.current.value
    props.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>my post </h3>
        <div>
          <div>
            <textarea onChange={ onPostChange } ref={newPostElement} value={props.profilePage.newPostText}/>
          </div>
          <div>
            <button onClick={ addPost } >Add post</button>
          </div>
        </div>
        <div className={ s.post }>
          { postsElements }
          <Post />
        </div>
      </div>
      main Content
    </div>
  );
}

export default MyPosts;