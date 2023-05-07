import React from "react";
import { Link, useParams } from "react-router-dom";
import UserPage from "./userPage";
import UsersTable from "./usersTaple";
import UserEditPage from "./userEditPage";

const UsersListPage = () => {
    const params = useParams();
    const { userId, edit } = params;
    return (
        <>
            <h1>UsersLayout</h1>
            <Link to='/'>
                <h3>Back to Main Page</h3>
            </Link>
            <h1>UsersListPage</h1>
            {userId
                ? (edit
                    ? (<UserEditPage id={userId}/>)
                    : (<UserPage id={userId}/>)
                )
                : (<UsersTable/>)
            }
        </>
    );
}
 
export default UsersListPage;