import React from 'react';
import s from './Dialogs.module.css'


function Dialogs() {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <div className={`${s.dialog} ${s.active}`}>dymich</div>
                    <div className={s.dialog}>sveta</div>
                    <div className={s.dialog}>viktor</div>
                    <div className={s.dialog}>valera</div>
                    <div className={s.dialog}>anrey</div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>raz</div>
                    <div className={s.message}>dva</div>
                    <div className={s.message}>tri</div>
                </div>

            </div>
        </div>
    )
}


export default Dialogs;