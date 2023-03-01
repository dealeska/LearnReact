import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts updateTextarea={props.updateTextarea} addPost={props.addPost} posts={props.state.posts} />
        </div>
    )
}

export default Profile;