import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const UserPage = () => {
    const { userId } = useParams();
    return (
        <>
            <h1>{`User with id: ${userId} profile`}</h1>
            {/* <Outlet/> // вызываются все вложенные компоненты и UserPage, и UserEditPage */} 
            <ul>
                <li>
                    <Link to={"/users"}>
                        <h3>Back to users list page</h3>
                    </Link>
                </li>
                <li>
                    <Link to={`/users/${userId}/edit`}>
                        <h3>Edit this User info</h3>
                    </Link>
                </li>
            </ul>
        </>
    );
}
 
export default UserPage;