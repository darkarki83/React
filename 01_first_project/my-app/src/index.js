import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  {id: 1, msg: 'Hi how are you', likesCount: 121},
  {id: 2, msg: 'Its my first post', likesCount: 19},
  {id: 2, msg: 'Yo yo yo', likesCount: 250},
  {id: 2, msg: 'Next level', likesCount: 1589}
];

let dialogsData = [
  { id: 1, name: 'Katia' },
  { id: 2, name: 'Vova' },
  { id: 3, name: 'Sasha' },
  { id: 4, name: 'Pasha' },
  { id: 5, name: 'Nikita' }
];

let messagesData = [
  { id: 1, msg: 'Hi' },
  { id: 2, msg: 'How are you' },
  { id: 3, msg: 'Hi artkdev' },
  { id: 4, msg: 'yo yo' }
];

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData}  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in yougigr app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
