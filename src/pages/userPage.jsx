import React from "react";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
    const { userId } = useParams();
    return (
        <>
            <h1>{`User with id: ${userId} profile`}</h1>
            <ul>
                <li>
                    <Link to={"/users"}>
                        <h3>Back to Users list</h3>
                    </Link>
                </li>
                <li>
                    <Link to={`/users/${userId}/edit`}>
                        <h3>Edit current User info</h3>
                    </Link>
                </li>
            </ul>
        </>
    );
}
 
export default UserPage;