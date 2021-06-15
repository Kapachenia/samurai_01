import React from "react";
import './App.css';
import './components/Header/Header.module.css';
import './components/Navbar/Navbar.module.css';
import './components/Profile/Profile.module.css';
import './components/Profile/MyPosts/MyPosts.module.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./common/Preloader/Proloader";

class App extends React.Component {
    // делаем запрос в App, когда всё App отрендарилась и хочет замонтироваться мы делаем запрос
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        // будем возвращать всю разметку только если мы проинициализировались в противном случае proloader
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        {/* Route - это компонента, которая следит за URL в браузере и если URL совпадает,*/}
                        {/* то она делает render. В нашем случае возвращает jsx разметку, возвращает компоненту.*/}
                        {/*Добавляем имя параметра profile/:userId. Переменная в ProfileContainer*/}
                        {/*знак ? говорит об опциональности параметра*/}
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <LoginPage/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

// что бы в state был app, нужно закомбайнить appReducer

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

// когда connect компоненту сбивается роутинг. Нужно обернуть connect withRouter
// export default withRouter(connect(null, {getAuthUserData})(App));
// для того, чтобы убрать вложеность hoc в hoc используем метод compose
// диспастчем санку initializeApp
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


