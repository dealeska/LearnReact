import classes from './Dialogs.module.css'
import Message from './Message/Message';
import NavPart from './NavPart/NavPart';

let dialogsData = [
    { id: 1, name: "Alexey" },
    { id: 2, name: "Marina" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Alesya" }
]

let messagesData = [
    { id: 1, message: "bla-bla-bla" },
    { id: 2, message: "bla-bla-bla" },
    { id: 3, message: "bla-bla-bla" }
]

let dialogsElements = dialogsData.map(d => <NavPart id={d.id} content={d.name} />)

let messagesElements = messagesData.map(mes => <Message id={mes.id} message={mes.message} />)

const Dialogs = () => {
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