import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, PostType} from '../../redux/state';


type ProfilePropsType = {
    posts: Array<PostType>
    addPost: (postText: string) => void
    post: Array<PostType>
    message: string
    changeNewText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void

}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={props.addPost} post={props.post} message={props.message} changeNewText={props.changeNewText} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;