import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.state.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />)

    let textArea = props.state.newTextarea

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let changeTextarea = (e) => {
        let text = e.target.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={classes.item}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={textArea} onChange={changeTextarea}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;