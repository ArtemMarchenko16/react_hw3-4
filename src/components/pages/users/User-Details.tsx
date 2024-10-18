import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/IPost";
import {getPostOfUsers} from "../../services/api.service";
import {useLocation, useParams} from "react-router-dom";
import styles from '../stylePages.module.css'

const UserDetails = () => {

    const {id} = useParams()
    const [posts, setPosts] = useState<IPost[]>([])
    const {state} = useLocation();

    useEffect(() => {
        if(id) {
            getPostOfUsers(id)
                .then(value => setPosts(value))
        }
    }, []);

    return (
        <div className={styles.styleForFont}>
            {
                posts.map(post => <div key={post.id}><h3>title: {post.title}</h3>
                    <div>
                        <h4>Body: {post.body}</h4>
                    </div>
                </div>)
            }
            <div>
                {
                    <>
                        <div className={styles.styleForUserData}>
                            <h3>Name: {state.name} {state.username}</h3>
                            <div>
                                <h4>Email: {state.email}</h4>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default UserDetails;