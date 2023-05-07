import React from "react";
import { Link } from "react-router-dom";

const UsersTable = () => {
    const users = [
        {id: 1, label: "user 1"},
        {id: 2, label: "user 2"},
        {id: 3, label: "user 3"},
        {id: 4, label: "user 4"},
        {id: 5, label: "user 5"}
    ];
    return (
        <div>
            {users.map(user => (
                <Link key = {user.id} to = {`${user.id}`}>
                    <h3 key = {user.id}>{user.label}</h3>
                </Link>
            ))}
        </div>
    );
}
 
export default UsersTable;