import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { addPost } from './redux/state';
//import { updateNewPostText } from './redux/state';
import { BrowserRouter, Route } from 'react-router-dom';
//import { subscribe } from './redux/state';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state"

//addPost("New man")

let _rerenderEntireTree = (store) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App state={store.getState()} addPost={store.addPost} updateNewPostText={store.updateNewPostText} />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

  _rerenderEntireTree(store.getState())

  store.subscribe(_rerenderEntireTree);


  
// If you want to start measuring performance in yougigr app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
