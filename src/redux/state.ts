export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    messageForNewPost: string
}

export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: StateType
    // changeNewText: (newText: string) => void
    // addPost: (postText: string) => void
    subscribe: (observer: () => void) => void
    _renderTree: () => void
    getState: () => StateType
    dispatch: (action: addPostActionType | changeNewTextActionType) => void
}

export type addPostActionType = ReturnType<typeof addPostAC>
export type changeNewTextActionType = ReturnType<typeof changeNewTextAC>
export type updateNewMessageBody = ReturnType<typeof updateNewMessageBodyAC>
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC> | ReturnType<typeof updateNewMessageBodyAC>

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: 'sfsd',
            posts: [
                {id: 1, message: 'how are you', likesCount: 15},
                {id: 2, message: 'it\'s my first post', likesCount: 10},
                {id: 3, message: 'dva', likesCount: 3},
                {id: 4, message: 'tri', likesCount: 7},
                {id: 5, message: 'chet', likesCount: 6}
            ]
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'raz'},
                {id: 2, message: 'dva'},
                {id: 3, message: 'tri'}
            ],
            dialogs: [
                {id: 1, name: 'dimych'},
                {id: 2, name: 'andrew'},
                {id: 3, name: 'sveta'},
                {id: 4, name: 'sasha'},
                {id: 5, name: 'viktor'},
                {id: 6, name: 'valera'}
            ],
            newMessageBody: ''
        }
    },
    subscribe(observer) {
        this._renderTree = observer
    },
    _renderTree() {
        console.log('state was changed')
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost: PostType = {
                id: 6,
                message: action.postText,
                likesCount: 5
            }
            this._state.profilePage.posts.push(newPost)
            this.subscribe(this._state)
        } else if(action.type === CHANGE_NEW_TEXT) {
            this._state.profilePage.messageForNewPost = action.newText
            this.subscribe(this._state)
        } else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this.subscribe(this._state)
        } else if(action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this.subscribe(this._state)

        }
    }
}



export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText
    } as const
}

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    }
}



export default store;