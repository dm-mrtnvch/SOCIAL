import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import {PostType, StateType} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state'
import observer from './redux/state'

export const renderTree = (state: StateType) => {
    ReactDOM.render(
        <App appState={state}
             addPost={store.addPost}
             changeNewText={store.changeNewText}
             store={store}
        />,
        document.getElementById('root'))
}


// store.subscribe(renderTree)
// renderTree()


// subscribe(() => {alert('raz')})

// // If you want to start measuring pe  rformance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
