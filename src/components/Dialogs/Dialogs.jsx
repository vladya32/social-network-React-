import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="Dima" id="1" />
                <DialogItem name="Viktor" id="2" />
                <DialogItem name="Masha" id="3" />
                <DialogItem name="Andriy" id="4" />
                <DialogItem name="Alina" id="5" />
                <DialogItem name="Vasya" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="Hi !" />
                <Message message="What's your name ?" />
                <Message message="How are you ?" />
            </div>
        </div>
    )
}

export default Dialogs;