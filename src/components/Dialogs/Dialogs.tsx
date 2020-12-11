import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



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

