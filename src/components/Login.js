import React from 'react';


export default class Login extends React.Component{

  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'appliation/json'
      },
      body: JSON.stringify(this.state)
    })

  }
  handleForgotPassword = () => {

  }

  handleSignUp = () => {

  }

  render(){

    return(
    <div className="model" id="modal">
        <span className="modelHeading">Log Into Your Account</span>

        <form id="create_form" action="#" onSubmit={this.handleSubmit} >
              <input type='text' placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange}/>
              <input type='text' placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
              <button className="registerButton" type="submit">Login</button>
        </form>
        <p id="create">No account? <a href="#" onClick={this.handleSignUp}>Sign up</a></p>
        <p id="reset"><a href='#' onClick={this.handleForgotPassword}>Forgot Password?</a></p>
    </div>
    );
}
}
