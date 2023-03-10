import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../redux/state';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import NavPart from './NavPart/NavPart';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <NavPart id={d.id} content={d.name} />)

    let messagesElements = props.state.messages.map(mes => <Message id={mes.id} message={mes.message} />)

    let textareaMessageText = props.state.newMessageText

    let textareaMessageOnChange = (e) => {
        let newMessage = e.target.value
        props.dispatch(updateMessageTextActionCreator(newMessage))
    }

    let sendMessageOnClick = () => {
        props.dispatch(sendMessageActionCreator())
    }

    return (
        <div className={classes.mainDialog}>
            <div className={classes.dialogs}>
                {dialogsElements}
            </div>
            <div>


                <div className={classes.messages}>
                    {messagesElements}
                </div>
                <div>
                    <textarea
                        value={textareaMessageText}
                        placeholder='enter message'
                        onChange={textareaMessageOnChange}
                    ></textarea>
                </div>
                <div>
                    <button onClick={sendMessageOnClick}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;