import classes from "./Header.module.css"

const Header = () => {
    return (
        <header className={classes.header}>
            <div>
                <img className={classes.img} src="https://klike.net/uploads/posts/2019-06/medium/1561182237_14.jpg" />
            </div>
            <div>
                yes
            </div>
        </header>
    )
}

export default Header;