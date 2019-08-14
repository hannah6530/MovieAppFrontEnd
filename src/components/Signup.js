import React from 'react';


export default class Signup extends React.Component{

  state = {
    email: '',
    name: '',
    username: '',
    password: ''
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render()
  {
    return(
      <div className="model" id="modal">
          <a href="#" className="close">X</a>
          <span className="modelHeading">Enter Your Details</span>

          <form id="create_form" action="#" onSubmit={this.handleSubmit}>
                <input type='text' placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleChange}/>
                <input type='text' placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                <input type='text' placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange}/>
                <input type='text' placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="registerButton" type="submit">Register</button>
          </form>
      </div>
    );
}
}
