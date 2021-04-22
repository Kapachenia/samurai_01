import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> );

    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />);

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
                <div>
                    <textarea onChange={onMessageChange} value={state.newMessageText} placeholder='Enter your message' />
                </div>
                <div>
                    <button onClick={addMessage}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;