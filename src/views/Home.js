import React from "react";
import AuthenticatedUser from "../components/AuthenticatedUser";
import {UserProvider} from '../context/User'

function Home() {
    return (
        <div className="container">
            <UserProvider>
                <div className="d-flex">
                    <div className="me-2">My Name is : </div> <AuthenticatedUser />
                </div>
            </UserProvider>
        </div>
    )
}

export default Home;