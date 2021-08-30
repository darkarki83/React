import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.postData.map( (p) => <Post message={p.msg} key={p.id} like={p.likesCount} />)

  let newPostElement = React.createRef()

  const onAddPost = () => {
    props.addPostActionCreator()
  }

  const onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostTextActionCreator(text)
  }

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>my post </h3>
        <div>
          <div>
            <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText}/>
          </div>
          <div>
            <button onClick={ onAddPost } >Add post</button>
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