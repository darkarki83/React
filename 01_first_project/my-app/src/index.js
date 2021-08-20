import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './redux/state';
import { updateNewPostText } from './redux/state';
import { BrowserRouter, Route } from 'react-router-dom';
import { subscribe } from './redux/state';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state"

//addPost("New man")

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

  rerenderEntireTree(state)

  subscribe(rerenderEntireTree);


  
// If you want to start measuring performance in yougigr app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
