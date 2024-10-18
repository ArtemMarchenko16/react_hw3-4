import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {getUsers} from "../../services/api.service";
import User from "./User";

const Users = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers()
            .then(value => {
                setUsers(value)
            })
    }, []);


    return (
        <div>
            {
                users.map((user:IUser) => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;