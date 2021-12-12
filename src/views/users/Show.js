import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Show(props) {
    const [user, setUser] = useState([])
    let {identifier} = useParams()
    const [loading, setLoading] = useState(false)

    const getUser = async() => {
        setLoading(true) 
        try {
            let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`)
            setUser(response.data)  
            setLoading(false)          
        } catch (error) {
            console.log(error.message) 
            setLoading(false)  
        }
    }

    useEffect(() => {
        getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[identifier])

    return (
        <div className="container">
            {
                loading ? <div>Loading . . .</div> :
                <div className="card">
                    <div className="card-header">{user.name}</div>
                    <div className="card-body">{user.website}</div>
                    <div className="card-body">{user.email}</div>
                </div>

            }
        </div>
    );
}

export default Show;