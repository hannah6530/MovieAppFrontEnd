import React from 'react';


class UpdateInfo extends React.Component{

  state = {
    name: '',
    email: '',
    username: '',
    password: ''
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/users/${this.props.current_user_id}`, {
      method: 'PATCH',
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
    // console.log(this.props.current_user_id)
  }

  render(){

    return(
      <div className="model" id="modal">
          <span className="modelHeading">Change Account Information</span>

          <form id="create_form" action="#" onSubmit={this.handleSubmit}>
                <input type='text' placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                <input type='text' placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}/>
                <input type='text' placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange}/>
                <input type='text' placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="registerButton" type="submit">Update</button>
          </form>
      </div>

    )

  }




}
export default UpdateInfo;
