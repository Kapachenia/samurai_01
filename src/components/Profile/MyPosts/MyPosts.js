import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let postsElement =  props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElement }
            </div>
        </div>
    )
}

export default MyPosts;