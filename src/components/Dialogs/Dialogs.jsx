import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog+' '+ s.active}>Diana</div>
                    <div className={s.dialog}>Sveta</div>
                    <div className={s.dialog}>Masha</div>
                    <div className={s.dialog}>Isvan</div>
                </div>
                <div classname={s.messages}>
                    <div className={s.message}> Hi< /div>
                    <div className={s.message}>Hi hi</div>
                    <div className={s.message}>Yo</div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;