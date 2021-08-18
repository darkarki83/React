import { rerenderEntireTree } from './render';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state"

//addPost("New man")

rerenderEntireTree(state);

// If you want to start measuring performance in yougigr app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
