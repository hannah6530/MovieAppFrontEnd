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
  handleSubmit = () => {

  }
  handleForgotPassword = () => {
    console.log('hi')
  }

  handleSignUp = () => {
    console.log('hey')
  }

  render(){

    return(
    <div className="model" id="modal">
        <span className="modelHeading">Log Into Your Account</span>

        <form id="create_form" action="#" onSubmit={this.handleSubmit}>
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
