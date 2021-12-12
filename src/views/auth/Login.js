import React from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
    return (
        <div className="container">
            <div className="d-flex row justify-content-center align-items-center vh-100 display-6 text-success">
                <div className="text-center">
                    <NavLink to="/">go Home</NavLink>
                </div>
                    Login Page
            </div>
        </div>
    );
}

export default Login;