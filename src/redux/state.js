import dialogsReducer from "./dialogs_reducer"
import profileReducer from "./profile_reducer"

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}

export default store;