import React from 'react';
import s from '../Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type MessagePropsType = {
    message: string
}

function Message(props: MessagePropsType) {

    let newMessageElement: any = React.createRef()

    let addMessage = () => {
        let text = newMessageElement.current.value
        alert(text)
    }

    return (
        <div className={s.message}>{props.message}
            <textarea ref={newMessageElement}></textarea>
            <button onClick={addMessage}>send message</button>
        </div>
    )
}

export default Message;

