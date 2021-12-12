import React from "react";
import AuthenticatedUser from "../components/AuthenticatedUser";
import {UserProvider} from '../context/User';
import {useRecoilState} from 'recoil';
import {Theme} from '../store';

function Home() {
    const [currentTheme, setCurrentTheme] = useRecoilState(Theme)
    const defaultTheme = currentTheme == 'dark' ? 'bg-dark text-white' : 'bg-success text-white'

    return (
        <div className="container">
            <UserProvider>
                <div className="d-flex">
                    <div className="me-2">My Name is : </div> <AuthenticatedUser />
                </div>
            </UserProvider>

            <div className="row">
                <div className="col-md-4">
                    <select value={currentTheme} onChange={(e) => setCurrentTheme(e.target.value)} className="form-control">
                        <option value="dark">Dark</option> 
                        <option value="light">Light</option>
                    </select>
                </div>
            </div>
            <div>
                you Are selecting the {currentTheme} Theme
            </div>


        </div>
    )
}

export default Home;