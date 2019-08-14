import React from 'react';
import './App.css';
import Login from './components/Login'
import ProfilePage from './components/ProfilePage'
import Signup from './components/Signup'
import CreatePost from './components/CreatePost'


class App extends React.Component{
  state = {
    page: ''
  }

  render(){

    switch(this.state.page) {
      case 'LOG IN':
        return <Login />
      case 'PROFILE':
        return <ProfilePage />
      case 'SIGN UP NOW':
        return <Signup />
      case 'CREATE A POST':
        return <CreatePost />
      default:
        return <Login />
    }


  }

}

export default App;
