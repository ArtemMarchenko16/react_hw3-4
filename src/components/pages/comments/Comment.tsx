import React, {FC} from 'react';
import {IComments} from "../../models/IComments";

type ICommentProps = {
    comment: IComments;
}

const Comment:FC<ICommentProps> = ({comment}) => {
    return (
        <>
            <h3>Name: {comment.name}</h3>
            <p>Email: {comment.email}</p>
            <div>Body: {comment.body}</div>
        </>
    );
};

export default Comment;