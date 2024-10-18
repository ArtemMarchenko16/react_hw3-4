import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import {NavLink} from "react-router-dom";
import styles from '../stylePages.module.css'
import style from "../../menu/styleForMenu.module.css";



type IPostProps = {
    post: IPost;
}

const Post:FC<IPostProps> = ({post}) => {
    return (
        <NavLink className={style.href} state={post} to={post.id.toString()}>
            <div className={styles.styleForTextOfPost} key={post.id}> <h3>Title: {post.title}</h3>
                <div>body: {post.body}</div>
            </div>
        </NavLink>
    );
};

export default Post;