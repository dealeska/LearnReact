import { NavLink } from 'react-router-dom';
import classes from './NavPart.module.css'

const NavPart = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id} className={({ isActive }) => {
                const linkClasses = [classes.a];
                if (isActive) linkClasses.push(classes.activeLink);
                return linkClasses.join(" ");
            }}>{props.content}</NavLink>
        </div>
    )
}

export default NavPart;