import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" />
            </div>
            <div className={classes.item}>
                Ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;