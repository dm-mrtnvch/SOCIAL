import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, changeNewText, subscribe} from './redux/state';
import {PostType, StateType} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';

export const renderTree = (state: StateType) => {
    ReactDOM.render(
        <App appState={state}
             addPost={addPost}
             changeNewText={changeNewText}
        />,
        document.getElementById('root'))
}

renderTree(state)

subscribe(() => {alert('raz')})

// // If you want to start measuring pe  rformance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
