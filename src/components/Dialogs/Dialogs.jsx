import classes from './Dialogs.module.css'
import NavPart from './NavPart/NavPart';

const Dialogs = () => {
    return (
        <div className={classes.mainDialog}>
            <div className={classes.dialogs}>
                <NavPart to="/dialogs/1" content="Alexey" />
                <NavPart to="/dialogs/2" content="Marina" />
                <NavPart to="/dialogs/3" content="Sveta" />
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    1
                </div>
                <div className={classes.message}>
                    2
                </div>
            </div>
        </div>
    )
}

export default Dialogs;