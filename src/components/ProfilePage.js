import React from 'react';
import { Link } from 'react-router-dom'

export default class ProfilePage extends React.Component{

  componentDidMount(){
    if(!localStorage.token){
      this.props.history.push('/')
    }
  }

  handleLogout = () => {
    if(localStorage.token){
      localStorage.clear()
    }
  }


  render()
    {
      return(
      <div>
      <h2>Hello {this.props.username}</h2>
      <br/>

      <button className="favoriteButton">Favorites</button>
      <br/>
      <button className="favoriteButton">Personal Information</button>
      <br/>
      <button className="favoriteButton"><Link to="/my_movie_posts">My Movie Posts</Link></button>
      <br/>
      <br/>
      <br/>
      <button className="logout" onClick={this.handleLogout}><Link to="/">Logout</Link></button>
      </div>
    );
}
}
