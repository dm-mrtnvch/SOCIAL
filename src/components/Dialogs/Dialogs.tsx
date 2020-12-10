import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


function Dialogs() {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <div className={`${s.dialog} ${s.active}`}>
                        <NavLink to={'/dialogs/1'} >dymich</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/2'}>sveta</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/3'}>viktor</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/4'}>valera</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/5'}>andrey</NavLink>
                    </div>
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