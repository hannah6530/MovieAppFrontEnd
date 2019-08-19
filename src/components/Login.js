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
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        localStorage.token = data.token
        this.props.history.push('/profile')
      }
    })

  }
  handleForgotPassword = () => {

  }

  handleSignUp = () => {

  }

  render(){

    return(
      <div>
        <h1 className="title">Welcome to Movie Splazz</h1>
        <h3 className="header"> Where you can add postings of your favorite movies! </h3>
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
    </div>
    );
}
}
