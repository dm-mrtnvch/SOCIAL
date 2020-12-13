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
}

export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

export type StateType  = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state: StateType = {
    profilePage: {
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
        ]
    }
}

export default state;