import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {IComments} from "../../models/IComments";
import {getCommentOfPosts} from "../../services/api.service";
import styles from '../stylePages.module.css'


const PostDetails = () => {

    const {id} = useParams();
    console.log(id);
    const [comments, setComments] = useState<IComments[]>([]);
    const {state} = useLocation();

    useEffect(() => {
        if(id) {
            getCommentOfPosts(id)
                .then(value => setComments(value));
        }
    }, []);

    return (
        <div className={styles.styleForCommentsOfPost}>
            {
                comments.map(comment => <div key={comment.id}><h2>Comments:</h2>   <h3>Name: {comment.name}</h3>
                    <div>
                        <h4>Body: {comment.body}</h4>
                    </div>
                </div>)
            }
            <div>
                {
                    <>
                        <div className={styles.styleForPostOfData}>
                            <h2>Posts of comments: </h2> <h3>Title: {state.title}</h3>
                            <div>
                                Body: {state.body}
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default PostDetails;