import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostType} from '../../redux/state';


type ProfilePropsType = {
    posts: Array<PostType>

}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;