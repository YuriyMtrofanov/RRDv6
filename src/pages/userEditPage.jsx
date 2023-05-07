import React from "react";
import { Link } from "react-router-dom";

const UserEditPage = ({ id }) => {
    return (
        <div>
            <h1>{`Edit info of User with id: ${id}`}</h1>
            <Link to={`/users/${id}/`}>
                <h3>User profile profile</h3>
            </Link>
            <Link to={`/users/${Number(id)+1}/`}>
                <h3>Another User profile</h3>
            </Link>
            <Link to="/users/">
                <h3>Back to users list page</h3>
            </Link>
        </div>
    );
}
 
export default UserEditPage;