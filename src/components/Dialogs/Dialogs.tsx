import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


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

    let messagesData = [
        {id: 1, message: 'raz'},
        {id: 2, message: 'dva'},
        {id: 3, message: 'tri'}
    ]

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    {/*<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>*/}
                    {/*<DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>*/}
                    {/*<DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>*/}
                    {/*<DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>*/}
                </div>
                <div className={s.messages}>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                    <Message message={messagesData[2].message}/>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;