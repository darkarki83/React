import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {

  let postData = [
    {id: 1, msg: 'Hi how are you', likesCount: 121},
    {id: 2, msg: 'Its my first post', likesCount: 19},
    {id: 2, msg: 'Yo yo yo', likesCount: 250},
    {id: 2, msg: 'Next level', likesCount: 1589}
  ]

  return (
    <div >
      <ProfileInfo/>
      <MyPosts postData={postData} />
    </div>
  );
}

export default Profile;