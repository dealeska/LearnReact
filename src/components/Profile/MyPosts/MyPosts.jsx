import classes from './MyPosts.module.css'
import Post from './Post/Post';

let postsData = [
    { id: 1, message: "First post", likesCount: 10 },
    { id: 2, message: "Second post", likesCount: 24 }
]

let postsElements = postsData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />)

const MyPosts = () => {
    return (
        <div className={classes.item}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;