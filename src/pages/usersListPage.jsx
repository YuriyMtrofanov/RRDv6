import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import UsersTable from "./usersTable";
import UserPage from "./userPage";
import UserEditPage from "./userEditPage";

const UsersListPage = () => {
    const { userId, edit } = useParams();
    return (
        <>
            <h1>UsersLayout</h1>
            <Link to="/">
                <h3>Back to Main Page</h3>
            </Link>
            <h1>UsersListPage</h1>
            {userId
                ? (edit
                    ? (<UserEditPage />)
                    : (<UserPage />)
                )
                : (<UsersTable/>)
            }
        </>
    );
}
 
export default UsersListPage;