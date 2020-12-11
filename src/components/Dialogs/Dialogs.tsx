import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import Post from '../Profile/MyPosts/Post/Post';


type DialogItemType = {
    name: string
    id: number
}
type MessageType = {
    message: string

}

function DialogItem(props: DialogItemType) {

    let path = '/dialogs/' + props.id

    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
function Message(props: MessageType) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


function Dialogs() {

    let dialogsData = [
        {id: 1, name: 'dimych'},
        {id: 2, name: 'andrew'},
        {id: 3, name: 'sveta'},
        {id: 4, name: 'sasha'},
        {id: 5, name: 'viktor'},
        {id: 6, name: 'valera'}
    ]

    let dialogsElemets = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesData = [
        {id: 1, message: 'raz'},
        {id: 2, message: 'dva'},
        {id: 3, message: 'tri'}
    ]

    let messagesElements = messagesData.map((message) => <Message message={message.message}/>)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {dialogsElemets}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}


export default Dialogs;

