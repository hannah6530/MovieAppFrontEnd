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
    username: ''
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
    this.setState({username: profileData.username})
  })
}
  }


  render(){

    return(

      <Switch>
        <Route path="/profile" render={(routerProps) => <ProfilePage username={this.state.username}{...routerProps} />} />
        <Route path="/home" render={(routerProps) => <NavBar {...routerProps} />} />
        <Route path="/" render={(routerProps)=> <Login {...routerProps}/>} />
      </Switch>


    )



  }

}

export default App;
