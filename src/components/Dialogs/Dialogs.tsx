import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogType, MessageType, PostType, updateNewMessageBodyAC} from '../../redux/state';



type DialogsPropsType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}

function Dialogs(props: DialogsPropsType) {

    let state = props.store.getState().dialogsPage

    let dialogsElemets = props.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.messagesData.map((message) => <Message message={message.message}/>)
    let newMessageBody = props.state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(onSendMessageClick())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyAC())
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {dialogsElemets}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                   <div>
                       <div><textarea
                           value={onSendMessageClick}
                           onChange={onNewMessageChange}
                           placeholder={'enter your message'}>
                       </textarea></div>
                       <div><button onClick={}></button></div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

