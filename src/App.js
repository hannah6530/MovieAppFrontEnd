import React from 'react';
import './App.css';
import Login from './components/Login'
import CreatePost from './components/CreatePost'
import Signup from './components/Signup'
import ProfilePage from './components/ProfilePage'
import NavBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom'


class App extends React.Component{

  state = {
    username: '',
    logged_in: ''
  }


  componentDidMount() {
    if (localStorage.token) {
  fetch('http://localhost:3000/profile', {
    headers: {
      Authorization: localStorage.token
    }
  })
  .then(res => res.json())
  .then(profileData => {
    this.setState({
      username: profileData.username,
      logged_in: localStorage.token
    })
  })
}
  }

  render(){

    return(
      <div>
        {this.state.logged_in && <NavBar />}
        <Switch>
          <Route path="/profile" render={(routerProps) => <ProfilePage username={this.state.username}{...routerProps} />} />
          <Route path="/signup" render={(routerProps)=> <Signup {...routerProps}/>} />
          <Route exact path="/" render={(routerProps)=> <Login {...routerProps}/>} />
        </Switch>
      </div>
    )

  }

}

export default App;
