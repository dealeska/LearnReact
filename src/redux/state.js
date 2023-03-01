import { renderEntireTree } from "../render";

let state = {
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
}

export function addPost() {
    let newPost = {
        id: 5,
        message: state.profilePage.newTextarea,
        likesCount: 0
    }
    debugger;
    state.profilePage.posts.push(newPost);
    state.profilePage.newTextarea = ''
    renderEntireTree(state)
}

export function updateTextarea(text) {
    debugger;
    state.profilePage.newTextarea = text
}

export default state;