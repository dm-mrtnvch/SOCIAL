import {addPost, changeNewText, StateType} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

export const renderTree = (state: StateType) => {
    ReactDOM.render(
        <App appState={state}
             addPost={addPost}
             changeNewText={changeNewText}
        />,
        document.getElementById('root'))
}