import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {NavLink} from "react-router-dom";
import styles from "../../menu/styleForMenu.module.css";

type IUserProps = {
    user: IUser;
}

const User:FC<IUserProps> = ({user}) => {
    return (
        <>

            <NavLink className={styles.href} state={user} to={user.id.toString()}>
                <div key={user.id}><p>Name: {user.name} {user.username}</p>
                    <div>email: {user.email}</div>
                </div>
            </NavLink>

        </>
    );
};

export default User;