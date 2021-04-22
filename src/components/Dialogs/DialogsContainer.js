import React from 'react';
import {addMessageActionCreator, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// замапить state на props. Превратить часть state в props
// настраивает данные, которые мы возмём из state

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

// настраивает call back, которые мы будем отправлять в презентационнуб компоненту

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageText(text));
            },
// запускаем ActionCreator, он возвращает action (объект у которого есть как min type)
// и dispatch то, что вернул ActionCreator (диспатчим action)
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
};

// connect создаёт контейнерную компоненту, внутри контейнерной компоненты она рендерит презентационную компоненту и
// внутрь презентационной компоненты в качестве props передаёт те свойства, которые седят в 2-х объектах

// в первую функцию connect засунит state во вторую засунит distatch
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;