import React from 'react';


export default class Signup extends React.Component{

  state = {
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
          <span className="modelHeading">Create New Account</span>

          <form id="create_form" action="#" onSubmit={this.handleSubmit}>
                <input type='text' placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange}/>
                <input type='text' placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="registerButton" type="submit">Sign Up</button>
          </form>
      </div>
    );
}
}
