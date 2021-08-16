import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElements = props.state.postData.map( (p) => <Post message={p.msg} like={p.likesCount} />)

  let newPostElement = React.createRef();

  const onButtonClick = () => {
    let text = newPostElement.current.value
    props.addPost(text)
  }

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>my post </h3>
        <div>
          <div>
            <textarea ref={newPostElement}></textarea>
          </div>
          <div>
            <button onClick={onButtonClick} >Add post</button>
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