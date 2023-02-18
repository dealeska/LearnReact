import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" />
            </div>
            <div className={classes.item}>
                Ava
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;