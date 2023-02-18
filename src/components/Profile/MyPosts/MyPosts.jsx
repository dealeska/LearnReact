import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.item}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message="First post" likesCount="10" />
                <Post message="Second post" likesCount="24" />
            </div>
        </div>
    )
}

export default MyPosts;