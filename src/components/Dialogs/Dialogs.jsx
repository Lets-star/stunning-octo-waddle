import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' '+ s.active}>
            <NavLink to={'dialog/'+props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}> {props.message}</div>
    )
}


const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name='Diana' id='1'/>
                    <DialogItem name='Ivan' id='2'/>
                    <DialogItem name='Nastya' id='3'/>
                    <DialogItem name='Semen' id='4'/>
                    <DialogItem name='Vasya' id='5'/>
                    <DialogItem name='Alina' id='6'/>
                </div>
                < div className={s.messages}>
                    <Message message='Hi'/>
                    <Message message='Yo'/>
                    <Message message='How are u'/>
                    <Message message='Thx'/>
            </div>
        </div>
</div>
)
}
export default Dialogs;