import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
// компонента вмотрирована
   componentDidMount() {
//делаем ajax запрос
// передаём вторым параметром объект для настройки запроса. { withCredentials: true }
       axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true }).then(response => {
// проверка response.data.resultCode === 0 - если 0, то мы залогинены
// и в этом случае мы должны задиспатчик авторизационные данные, которые возмём из response.data.data.login
// в response сидит data, стандартная axios структура
           if (response.data.resultCode === 0) {
               let {id, login, email} = response.data.data;
               this.props.setAuthUserData(id, email, login);
// авторизационные данные придут в reducer
           }
       });
   }
    render() {
// пробрасываем все props
        return <Header {...this.props} />
    }
}

// обернём HeaderContainer ещё одной контейнерной компонентой которую нам возвращает connect
// функция принимающая state и возвращающая объект
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
    // данные попадут в <Header/>
});
// setAuthUserData находится в auth-reducer
export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer);
// setAuthUserData - объект, которые содержит action creator, который содержится в auth-reducer
