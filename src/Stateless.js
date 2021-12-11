import React, { useState } from 'react';

function Stateless() {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [name, setName] = useState('')

    // menggunakan hook state
    const submitHandler = (e) => {
        e.preventDefault()
        setName(`${firstname} ${lastname}`)
        setFirstName('')
        setLastName('')
    }

    return (
        <div className="p-5">
              <div className="container">
                  <div className="row">
                      <div className="col-md-4">
                          <div className="card">
                                <div className="card-header">Learn React Function</div>
                                <div className="card-body">
                                    <form onSubmit={submitHandler}>
                                        <div className="mb-4">
                                              <label htmlFor="firstname" className="form-label">First Name</label>
                                              <input 
                                                type="text" 
                                                name="firstname" 
                                                id="firstname" 
                                                className="form-control"
                                                value={firstname}
                                                onChange={(e) => setFirstName(e.target.value)}
                                              ></input>
                                        </div>
                                        <div className="mb-4">
                                              <label htmlFor="lastname" className="form-label">Last Name</label>
                                              <input 
                                                type="text" 
                                                name="lastname" 
                                                id="lastname" 
                                                className="form-control"
                                                value={lastname}
                                                onChange={(e) => setLastName(e.target.value)}
                                              ></input>
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button type="submit" className="btn btn-primary">Show</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    My Name is {name ? name : '. . .'}
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
    )
}

export default Stateless;