import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogType, MessageType} from '../../redux/state';


type DialogsPropsType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}

function Dialogs(props: DialogsPropsType) {

    let dialogsElemets = props.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.messagesData.map((message) => <Message message={message.message}/>)

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

