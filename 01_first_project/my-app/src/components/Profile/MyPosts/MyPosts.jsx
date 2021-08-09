import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
          <div>
          my post
          <div>
            <textarea></textarea>
            <button>Add post</button>
          </div>
          <div>
            <Post message='Hi how are you' like="15"/>
            <Post message='Its my first post' like="20" />
           
            <Post />
          </div>
        </div>
        main Content
        </div>
    );
}

export default MyPosts;