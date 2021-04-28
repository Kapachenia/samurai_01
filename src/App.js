import './App.css';
import './components/Header/Header.module.css';
import './components/Navbar/Navbar.module.css';
import './components/Profile/Profile.module.css';
import './components/Profile/MyPosts/MyPosts.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
{/* Route - это компонента, которая следит за URL в браузере и если URL совпадает,*/}
{/* то она делает render. В нашем случае возвращает jsx разметку, возвращает компоненту.*/}
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;


