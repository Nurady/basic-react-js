import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Users(props) {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            let response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)            
        } catch (error) {
            console.log(error.message) 
        }
    }

    useEffect(() => {
        getUsers()
    },[])

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        users.map((user, index) => {
                            return (
                                <div className="col-md-4" key={index}>
                                    <div className="card mb-4">
                                        <div className="card-header">{user.name}</div>
                                        <div className="card-body">
                                            <div>
                                                <a href={`http://${user.website}`} target="_blank" rel="noreferrer">
                                                    {user.website}
                                                </a>
                                            </div>
                                            <NavLink className="mt-2 btn btn-primary" to={`/users/${user.id}`}>View</NavLink>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Users;