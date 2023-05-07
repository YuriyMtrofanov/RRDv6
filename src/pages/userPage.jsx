import React from "react";
import { Link, useParams } from "react-router-dom";

const UserPage = ({id}) => {
    return (
        <>
            <h1>{`User with id: ${id} profile`}</h1>
            <ul>
                <li>
                    <Link to="/users/">
                        <h3>Back to users list page</h3>
                    </Link>
                </li>
                <li>
                    <Link to={`/users/${id}/edit`}>
                        <h3>Edit this User info</h3>
                    </Link>
                </li>
            </ul>
        </>
    );
}
 
export default UserPage;