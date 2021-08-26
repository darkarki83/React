import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux_store"

//addPost("New man")

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App store={store}/>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

  rerenderEntireTree(store.getState())

  store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
  });


  
// If you want to start measuring performance in yougigr app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
