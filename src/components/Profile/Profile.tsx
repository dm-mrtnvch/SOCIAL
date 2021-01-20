import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostType} from '../../redux/state';


type ProfilePropsType = {
    posts: Array<PostType>
    addPost: (postText: string) => void
    post: Array<PostType>
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={props.addPost} post={props.post}/>
        </div>
    )
}

export default Profile;