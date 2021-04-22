const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych',},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 1, message: 'How is your it-kamasutra?'},
        {id: 1, message: 'Hi'},
        {id: 1, message: 'Yo'},
        {id: 1, message: 'Yep'}
    ],
    newMessageText: '222'
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let StateCopy = {...state};
            let newMessage = {
            id: 2,
            message: StateCopy.newMessageText,
        };
            StateCopy.messages.push(newMessage);
            StateCopy.newMessageText = '';
        return StateCopy;
        case UPDATE_NEW_MESSAGE_TEXT:
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageText = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, newText: text
    }
}

export default dialogsReducer;