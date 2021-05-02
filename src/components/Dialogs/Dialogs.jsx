import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialogItems}>
            <NavLink to={'dialog/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}> {props.message}</div>
    )
}

let dialogs = [{
    id: 1,
    name: 'Diana'
}, {
    id: 2,
    name: 'Ivan'
}, {
    id: 3,
    name: 'Nastya'
}, {
    id: 4,
    name: 'Semen'
}, {
    id: 5,
    name: 'Vasya'
}, {
    id: 6,
    name: 'Alina'
}]

let messagesData = [{
    id: 1,
    message: 'Hi'
}, {
    id: 2,
    message: 'Yo'
}, {
    id: 3,
    message: 'How are u'
}, {
    id: 4,
    message: 'Thx'
}]


let dialogsElements = dialogs
        .map(dialog=><DialogItem name={dialog.name} id={dialog.id}/>);

let messagesElements = messagesData
    .map(m=><Message message={m.message}/>)

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                < div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}
export default Dialogs;