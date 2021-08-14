import React from 'react';
import s from "./Friends.module.css";


const Friends = (props) => {
  return (
      <span className={s.span} >
        {props.name}
      </span>
  );
}

export default Friends;