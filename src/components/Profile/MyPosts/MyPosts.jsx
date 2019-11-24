import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={style.MyPostsContent}>
            <h2> My Posts !!!</h2>
            <div>
                <Post />
            </div>
        </div>
    );
};

export default MyPosts;
