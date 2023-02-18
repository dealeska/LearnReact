import classes from './NavBar.module.css'
import NavPart from './NavPart/NavPart';

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <NavPart to='/profile' content="Profile" />
            <NavPart to='/dialogs' content="Dialogs" />
            <NavPart to='/news' content="News" />
            <NavPart to='/music' content="Music" />
            <NavPart to='/settings' content="Settings" />
        </nav >
    )
}

export default NavBar;