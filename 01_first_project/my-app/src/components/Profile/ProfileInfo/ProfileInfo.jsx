import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div >
        <img className={s.img} src="https://www.imgonline.com.ua/examples/rainbow-background-1-big.jpg" />
      </div>
      <div className={ s.descriptionBlock }>
        ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;