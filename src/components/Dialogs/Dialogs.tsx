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
            <NavLink to={path} >{props.name}</NavLink>
        </div>
    )
}
function Message(props: MessageType) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


function Dialogs() {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <DialogItem name={'dimych'} id={1} />
                    <DialogItem name={'sveta'} id={2} />
                    <DialogItem name={'andrey'} id={3} />
                    <DialogItem name={'vitkor'} id={4} />
                    <DialogItem name={'valera'} id={5} />
                </div>
                <div className={s.messages}>
                    <Message message={'raz'} />
                    <Message message={'dva'} />
                    <Message message={'tri'} />
                </div>

            </div>
        </div>
    )
}


export default Dialogs;