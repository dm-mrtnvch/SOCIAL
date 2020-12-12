import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {PostsDataPropsType} from './components/Profile/MyPosts/MyPosts';
import {DialogsDataPropsType} from './components/Dialogs/Dialogs';
import {MessagesDataPropsType} from './components/Dialogs/Dialogs';


type AppPropsType = {
    posts: Array<PostsDataPropsType>
    dialogs: Array<DialogsDataPropsType>
    messages: Array<MessagesDataPropsType>
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={ () => <Profile posts={props.posts} />}/>
                    <Route path={'/dialogs'} render={ () => <Dialogs dialogsData={props.dialogs} messagesData={props.messages}/>}/>
                    <Route path={'/news'} render={ () => <News />}/>
                    <Route path={'/music'} render={ () => <Music />}/>
                    <Route path={'/settings'} render={ () => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
