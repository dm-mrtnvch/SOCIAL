import {PostType} from './state';

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'

const profileReducer = (state, action) => {

    if(action.type === ADD_POST) {
        let newPost: PostType = {
            id: 6,
            message: action.postText,
            likesCount: 5
        }
        state.profilePage.posts.push(newPost)
        this.subscribe(this._state)
    } else if(action.type === CHANGE_NEW_TEXT) {
        this._state.profilePage.messageForNewPost = action.newText
        this.subscribe(this._state)
    }

    return state
}