import React from 'react';
import style from './MyPosts.module.css';
import { Post } from '../../../element/Post';

export const MyPosts = () => {
    return (
        <div className={style.post__container}>
            <h2> New Post</h2>
            <div>
                <Post
                    name="Max"
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFYMZ0k2xA2x_R6Y69BpQOcmOATXOKnqtddjpEccrfdSAmdUP6&s"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
                <Post
                    name="Maksym"
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFYMZ0k2xA2x_R6Y69BpQOcmOATXOKnqtddjpEccrfdSAmdUP6&s"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
                <Post
                    name="Maxik"
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFYMZ0k2xA2x_R6Y69BpQOcmOATXOKnqtddjpEccrfdSAmdUP6&s"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae natus aliquid, modi, necessitatibus officia ipsum porro ipsam quasi dolorem, nihil illum vel. Excepturi, aperiam sed tempora quos cupiditate voluptasperspiciatis!"
                />
            </div>
        </div>
    );
};
