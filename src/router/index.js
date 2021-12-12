import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../views/Home';
import About from '../views/About';
import NotFound from '../views/errors/NotFound';
import Login from '../views/auth/Login';
import Navbar from '../components/Navbar';
import Users from '../views/users';
import UserShow from '../views/users/Show';

function Router(props) {
    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <Navbar>
                        <Home />
                    </Navbar> 
                } 
            />
            <Route 
                path="/about" 
                element={
                    <Navbar>
                        <About />
                    </Navbar>
                } 
            />
            <Route 
                exact = "true"
                path="/users" 
                element={
                    <Navbar>
                        <Users/>
                    </Navbar>
                } 
            />
            <Route 
                path="/users/:identifier" 
                element={
                    <Navbar>
                        <UserShow/>
                    </Navbar>
                } 
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>            
    );
}

export default Router;