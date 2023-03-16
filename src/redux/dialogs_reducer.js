const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        { id: 1, name: "Alexey" },
        { id: 2, name: "Marina" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Alesya" }
    ],
    messages: [
        { id: 1, message: "bla-bla-bla" },
        { id: 2, message: "bla-bla-bla" },
        { id: 3, message: "bla-bla-bla" }
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text })

export default dialogsReducer;