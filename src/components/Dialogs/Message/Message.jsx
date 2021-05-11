import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {
    let newMessage = React.createRef();

    const addNewMessage = () => {
        let text = newMessage.current.value;
        alert(text)
    };

    return (
        <div>
            <div className={s.message}> {props.message}</div>
            <div><textarea ref={newMessage}></textarea></div>
            <div>
                <button onClick={addNewMessage}></button>
            </div>
        </div>
    )
}

export default Message;