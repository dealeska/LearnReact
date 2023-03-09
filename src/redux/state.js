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
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newTextarea,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newTextarea = ''
            this._callSubscriber(this._state)
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newTextarea = action.newText
        }
    }
}

export default store;