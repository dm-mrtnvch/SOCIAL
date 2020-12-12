import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'how are you', likesCount: 15},
    {id: 2, message: 'it\'s my first post', likesCount: 10 }
]

let dialogs = [
    {id: 1, name: 'dimych'},
    {id: 2, name: 'andrew'},
    {id: 3, name: 'sveta'},
    {id: 4, name: 'sasha'},
    {id: 5, name: 'viktor'},
    {id: 6, name: 'valera'}
]

let messages = [
    {id: 1, message: 'raz'},
    {id: 2, message: 'dva'},
    {id: 3, message: 'tri'}
]

ReactDOM.render(
  <React.StrictMode>
    <App
    posts={posts}
    dialogs={dialogs}
    messages={messages}
    />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
