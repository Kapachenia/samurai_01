import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";

// reducer - это чистая функция, которая принимает старый state, action, если нужно, можифицирует старый state,
// возвращает модифицоронный, или старый, если не нужно было его менять.
// добавляем formReducer.
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});


// applyMiddleware - принять промежуточные слои
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;