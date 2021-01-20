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
import {StateType} from './redux/state';


type AppPropsType = {
    appState: StateType
    addPost: (postText: string) => void

}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={ () => <Profile
                        posts={props.appState.profilePage.posts}
                        addPost={props.addPost}/>}/>
                    <Route path={'/dialogs'} render={ () => <Dialogs
                        dialogsData={props.appState.dialogsPage.dialogs}
                        messagesData={props.appState.dialogsPage.messages}/>}/>
                    <Route path={'/news'} render={ () => <News />}/>
                    <Route path={'/music'} render={ () => <Music />}/>
                    <Route path={'/settings'} render={ () => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
