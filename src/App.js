import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
    const [identifier, setIdentifier] = useState(1)
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const getUsers = async() => {
        setLoading(true)
        try {
            let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`)
            setUsers(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        getUsers()       
    },[identifier])
  
    return (
      <div className="py-5">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-md-8">
                        <input 
                            type="text" 
                            name="identifier" 
                            id="identifier" 
                            className="form-control" 
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                        />
                        {
                            loading 
                            ? 
                            <div>Loading . . . .</div> 
                            :
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Website</th>
                                        <th>Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{users.name}</td>
                                        <td>{users.Username}</td>
                                        <td>{users.email}</td>
                                        <td>{users.website}</td>
                                        <td>{users.phone}</td>
                                    </tr>
                                    {/* {
                                        users.map((user, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{user.name}</td>
                                                    <td>{user.Username}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.website}</td>
                                                    <td>{user.phone}</td>
                                                </tr>
                                            )
                                        })
                                    } */}
                                </tbody>
                            </table>
                        }
                  </div>
              </div>
          </div>
      </div> 
    )
}

export default App;