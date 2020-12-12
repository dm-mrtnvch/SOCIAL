import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostsDataPropsType} from './MyPosts/MyPosts'
import {MyPostsPropsType} from './MyPosts/MyPosts'


function Profile(props: MyPostsPropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;