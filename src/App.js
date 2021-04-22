import './App.css';
import './components/Header/Header.module.css';
import './components/Navbar/Navbar.module.css';
import './components/Profile/Profile.module.css';
import './components/Profile/MyPosts/MyPosts.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/profile' render={ () => <Profile profilePage={ props.state.profilePage } addPost = {props.addPost} updateNewPostText = {props.updateNewPostText} /> }/>*/}
                    <Route path='/profile' render={ () => <Profile /> }/>
                    {/*<Route path='/dialogs' render={ () => <Dialogs state={ props.state.dialogsPage } addMessage = {props.addMessage} updateNewMessageText = {props.updateNewMessageText} /> }/>*/}
                    <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
                    <Route path='/news' render={ () => <News />} />
                    <Route path='/music' render={ () => <Music />} />
                    <Route path='/settings' render={ () => <Settings /> } />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;


