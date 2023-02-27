import classes from './Dialogs.module.css'
import Message from './Message/Message';
import NavPart from './NavPart/NavPart';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <NavPart id={d.id} content={d.name} />)

    let messagesElements = props.state.messages.map(mes => <Message id={mes.id} message={mes.message} />)

    return (
        <div className={classes.mainDialog}>
            <div className={classes.dialogs}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;