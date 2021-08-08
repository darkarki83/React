import React from 'react';
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
        <div>
          my post
          <div>
            new post
          </div>
          <div>
            <div className={ s.item }>post1</div>
            <div className={ s.item }>post2</div>
            <div className={ s.item }>post3</div>
          </div>
        </div>
        main Content
      </div>
    );
}

export default Profile;