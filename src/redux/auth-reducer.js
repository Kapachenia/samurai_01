const SET_USER_DATA = 'SET-USER-DATA';
// SET_USER_DATA установить пользовательские данные.

let initialState = {
    userId: null,
    email: null,
    login: null,
    // залогинены или нет
    isAuth: false,
    // идёт загрузка или не идёт
    // isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
// с сервера приходят данные. Берём старый state и перезатираем данные
                ...state,
// данные приходят в action. Данные нужные reducer для преобразования state лежат в action
// В action создадим объект "data" мы его деструктуризируем.
// В объекте "data" положим userId, email, login
// В action будет свойство data в нём будет сидеть userId, email, ligin
                ...action.data,
// склеиваем ...state и ...action.data. Свойства, которые находятся в ...action.data перезатирают свойства в .state
                    // если пришли пользовательские данные, то мы меняем на true
                isAuth: true
            }
        default:
            return state
    }
}
// приходит data. Может приходить и в разобраном виде
// setUserData - это action creator - задача функции вернуть action
// Упаковываем action, который будет задиспатчен в reducer (диспатчем action )
export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA, data: {userId, email, login}
        // в обхект data нужно упаковать свойства
    }
}

export default authReducer;