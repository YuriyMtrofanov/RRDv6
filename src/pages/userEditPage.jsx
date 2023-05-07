import React from "react";
import { Link, useParams } from "react-router-dom";

const UserEditPage = () => {
    const { userId } = useParams();
    return (
        <div>
            <h1>{`Edit info of User with id: ${userId}`}</h1>
            <Link to={`${userId}`}>
                <h3>User profile profile</h3>
            </Link>
            <Link to={`${Number(userId)+1}`}>
                <h3>Next User profile</h3>
            </Link>
            <Link to="">
                <h3>Back to users list page</h3>
            </Link>
        </div>
    );
}
 
export default UserEditPage;