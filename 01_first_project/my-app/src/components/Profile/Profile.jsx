import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={ s.content }>
        <div>
          <img src="https://www.imgonline.com.ua/examples/rainbow-background-1-big.jpg" />
        </div>
        <div>
          ava + description
        </div>
      <MyPosts hey="yo"/>
      </div>
    );
}

export default Profile;