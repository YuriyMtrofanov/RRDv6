import React from "react";
import { Link, useParams } from "react-router-dom";

const UserEditPage = () => {
    const { userId } = useParams();
    return (
        <div>
            <h1>{`Edit info of User with id: ${userId}`}</h1>
            <Link to={`/users/${userId}/`}>
                <h3>User profile</h3>
            </Link>
            <Link to={`/users/${Number(userId)+1}/`}>
                <h3>Next User profile</h3>
            </Link>
            <Link to="/users/">
                <h3>Back to Users list page</h3>
            </Link>
        </div>
    );
}
 
export default UserEditPage;