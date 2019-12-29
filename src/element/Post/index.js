import React from 'react';
import style from './Post.module.css';

export const Post = props => {
    const { img, name, text } = props;

    return (
        <div className={style.post__wrapper}>
            <div className={style.post__img}>
                <img src={img} alt="img" />
            </div>

            <div className={style.post__user}>
                <div className={style.user__name}>Name: {name}</div>
                <p className={style.user__text}>{text}</p>
            </div>
        </div>
    );
};
