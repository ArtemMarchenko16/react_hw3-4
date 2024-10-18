import React, {useEffect, useState} from 'react';
import {IComments} from "../../models/IComments";
import {getComments} from "../../services/api.service";
import Comment from "./Comment";

const Comments = () => {

    const [comments, setComments] = useState<IComments[]>([])
    useEffect(() => {
        getComments()
            .then(value => setComments(value))
    }, []);

    return (
        <div>
            {
                comments.map(comment => <Comment comment={comment} key={comment.id}/>)
            }
        </div>
    );
};

export default Comments;