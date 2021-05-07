const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'It"s my firs post', likesCount: 11},
        {id: 3, message: 'Hi', likesCount: 11},
        {id: 4, message: 'Hello', likesCount: 11}
    ],
    newPostText: '111',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
        }
            // let newPost = {
            //     id: 5,
            //     message: state.newPostText,
            //     likesCount: 0
            // };
            // let stateCopy = {...state};
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);
            // stateCopy.newPostText = '';
            // return stateCopy;

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
            // let stateCopy = {...state};
            // stateCopy.newPostText = action.newText;
            // return stateCopy
        }
        // если тип actiona SET_USER_PROFILE, то мы вернём копию ...state в котором поменяем profile на
        // profile который сидит в actione
        case SET_USER_PROFILE: {
            return  {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

// создаём AC(функция возвращающая объект, action(объект в котором инкапсулированы данные, для того что бы
// reducer получил этот action и применил изменения на state ) ) в который приходит profile.
// SET_USER_PROFILE - названия действия (actiona). Хотим засетать юзерский профайл, reducer возмёт из экшина
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export default profileReducer;