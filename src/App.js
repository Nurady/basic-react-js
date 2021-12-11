import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
      constructor () {
          super() 

          this.state = {
              firstname: '',
              lastname: '',
              name: ''
          }
      }

      changehandler = (e) => {
          this.setState({
              [e.target.name]: e.target.value // Form name
          })
      }

      submitHandler = (e) => {
          e.preventDefault()
          this.setState({
            name: `${this.state.firstname} ${this.state.lastname}` 
          })

          this.state.firstname = ''
          this.state.lastname = ''

          // dibaca sebelum dirender
      }

      render() {
        const {name} = this.state 
          return (
              <div className="p-5">
                  <div className="container">
                      <div className="col-md-4">
                          <div className="card">
                              <div className="card-header">
                                  Learn React JS
                              </div>
                              <div className="card-body">
                                  <form onSubmit={this.submitHandler}>
                                      <div className="mb-4">
                                          <label htmlFor="firstname" className="form-label">First Name</label>
                                          <input type="text" value={this.state.firstname} onChange={this.changehandler} name="firstname" id="firstname" className="form-control"></input>
                                      </div>
                                      <div className="mb-4">
                                          <label htmlFor="lastname" className="form-label">Last Name</label>
                                          <input type="text" value={this.state.lastname} onChange={this.changehandler} name="lastname" id="lastname" className="form-control"></input>
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
            )
      }
}

export default App;