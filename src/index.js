import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            {/*<App state = {state} addPost = {store.addPost.bind(store)} addMessage = {store.addMessage.bind(store)} updateNewPostText = {store.updateNewPostText.bind(store)} updateNewMessageText = {store.updateNewMessageText.bind(store)} />*/}
            <App state = {state} dispatch = { store.dispatch.bind(store) } store = {store} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
} );

reportWebVitals();
