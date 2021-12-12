import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserProvider } from '../context/User';
import { Authenticated, AuthUser } from '../store';
import AuthenticatedUser from './AuthenticatedUser';

function Navbar({children}) {
    const {user} = useRecoilValue(AuthUser)
    const auth = useRecoilValue(Authenticated)

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Your App</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact="true" className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                { auth.check && <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>}                                
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users">Users</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    <UserProvider>
                                        <AuthenticatedUser />
                                    </UserProvider>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users">Recoil:{user.name}</NavLink>
                            </li>
                        </ul>  
                        {
                            auth.check 
                            ? 
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="#">{auth.user.name}</NavLink>
                                    </li>                                   
                                </ul>  
                            :
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login">Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/register">Register</NavLink>
                                    </li>                                    
                                </ul>    
                        }
                    </div>
                </div>
            </nav>
            <div className="py-4">
                { children }
            </div>
        </div>
    );
}

export default Navbar;