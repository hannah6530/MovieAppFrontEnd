import React from 'react';


export default class Signup extends React.Component{

  state = {
    name: '',
    email: '',
    username: '',
    password: '',
    user_id: ''
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/signup', {
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
        this.props.setLogin(this.state.username, data.user_id, this.state.name, this.state.email)
      }
    })
  }

  render()
  {
    return(
    <div>
    <h1 className="title">Welcome to Movie Splazz</h1>
    <h3 className="header"> Where you can add postings of your favorite movies! </h3>
      <div className="model" id="modal">
          <span className="modelHeading">Create New Account</span>

          <form id="create_form" action="#" onSubmit={this.handleSubmit}>
                <input type='text' placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                <input type='text' placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}/>
                <input type='text' placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange}/>
                <input type='text' placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="registerButton" type="submit">Sign Up</button>
          </form>
      </div>
    </div>
    );
}
}
