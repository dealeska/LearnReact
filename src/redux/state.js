const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "First post", likesCount: 10 },
                { id: 2, message: "Second post", likesCount: 24 }
            ],
            newTextarea: ''
        },

        dialogsPage: {
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
        }
    },
    getState() {
        return this._state
    },

    _callSubscriber() {
        console.warn('no implementation')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newTextarea,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newTextarea = ''
            this._callSubscriber(this._state)
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newTextarea = action.newText
            this._callSubscriber(this._state)
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessageText
            this._callSubscriber(this._state)
        }
        else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text })


export default store;