import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reduser";

// reducer - это чистая функция, которая принимает старый state, action, если нужно, можифицирует старый state,
// возвращает модифицоронный, или старый, если не нужно было его менять.

let reducers = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer

});

let store = createStore(reducers);

window.store = store;

export default store;