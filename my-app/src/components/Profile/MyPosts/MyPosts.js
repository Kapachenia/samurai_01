import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsConrols";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let postsElement =  props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    // на каждое нажатие обновление
    // let onPostChange = () => {
    //     let text = newPostElement.current.value;
    //     props.updateNewPostText(text);
    // }

    return (
        <div className={classes.postsBlock}>
            <h3>my posts</h3>
            {/*когда форма соберёт данные и в форме будет сабмит, форма вызовет наш call back, который мы ей передадим*/}
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={classes.posts}>
                { postsElement }
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10)

// форма засобмитится, вызовется onAddPost к нам придёт value в value будет сидеть addNewPost и мф его можем передать в addPost
// добавляем addPost из контейнерной компоненты
let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {/*вместо textarea отрисуй Textarea*/}
                <Field name={"newPostText"} component={Textarea} placeholder={"Enter your post"} validate={[required, maxLength10]} />
            </div>
            <div>
                {/*при нажатии на button сабмит происходит автоматически*/}
                <button>add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;