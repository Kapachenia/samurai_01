import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
// import {addMessageActionCreator, updateNewMessageText} from "../../redux/state";

import {addMessageActionCreator, updateNewMessageText} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    console.log(state);

    // let newMessageElement = React.createRef();

    let dialogElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

    let messagesElements = state.messages.map(message => <Message message={message.message} />);

    let addMessage = () => {
        // props.addMessage();
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        // props.updateNewMessageText(text);
        props.dispatch(updateNewMessageText(text));
        // console.log(text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
                <div>
                    {/*<textarea onChange={onMessageChange} ref={newMessageElement} value={state.newMessageText} />*/}
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