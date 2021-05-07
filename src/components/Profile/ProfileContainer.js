import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    // Sideeffe делаются в метоже жизненного цикла componentDidMount
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        // с servera приходит объект response в нём нужно свойство data
            .then(response => {
                // весь объекст сэтаем в reduces
                this.props.setUserProfile(response.data);
                // в props этот объект где-то должен появится, с помощье mapDispatchToProps

            })
    }

    render() {
        return (
            <Profile { ...this.props } profile = {this.props.profile} />
        )
    }
}

// над компонентой ProfileContainer делаем ещё одну с помощью connect.
// контейнерная компонента будет взаимодействовать со store

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

// withRouter венет новую компоненту,к оторая отрисует ProfileContainer, но закинутся данные из URL

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

// ProfileContainer оборачиваем ещё раз функцией connect
// connect получает данные от store и получает call back от store

// connect возвращает новую компоненту, которая отрисует ProfileContainer, но закинет данные из store
// поменяем ProfileContainer на WithUrlDataContainerComponent
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);