import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes, addPostAC, PostType} from '../../../redux/state';

export type MyPostsPropsType = {
    posts: Array<PostsDataPropsType>
    addPost: (postText: string) => void
    changeNewText: (newText: string) => void
    post: Array<PostType>
    message: string
    dispatch: (action: ActionsTypes) => void
}

export type PostsDataPropsType = {
    id: number
    message: string
    likesCount: number
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

    // let postMessageRef = React.createRef<HTMLTextAreaElement>()
    // let addPost = () => {
    //     if (postMessageRef.current) {
    //         props.addPost(postMessageRef.current.value)
    //     }
    // }

    let addPost = () => {
        // props.addPost(props.message)
        props.dispatch(addPostAC(props.message))
    }

    let onPostChange = () => {

    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewText(e.currentTarget.value)
        props.dispatch({type: 'CHANGE-NEW-TEXT', newText: props.message})
    }

    return (
        <div className={s.postsBlock}>
            {props.addPost}
            <hr/>
                {props.post.map( p => <div key={p.id}><b>{`сюда должно добавлять сообщение ${props.addPost}`}</b></div>)}
            <hr/>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea onChange={newTextChangeHandler}
                              value={props.message}
                    />
                </div>
                <div>
                    <button onClick={addPost}> add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;