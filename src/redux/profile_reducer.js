const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        { id: 1, message: "First post", likesCount: 10 },
        { id: 2, message: "Second post", likesCount: 24 }
    ],
    newTextarea: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newTextarea,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newTextarea = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newTextarea = action.newText
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;