import React from 'react';
import { Link } from 'react-router-dom';


export default class ProfilePage extends React.Component{

  componentDidMount(){
    if(!localStorage.token){
      this.props.history.push('/')
    }
  }

  handleLogout = () => {
    this.props.logout()
  }

  render()
    {
      return(
      <div>
        <h2 id="h2">Hello {this.props.name}</h2>
        <br/>
        <button className="favoriteButton"><Link to="favorites">Favorites</Link></button>
        <br/>
        <button className="favoriteButton"><Link to="/my_movie_posts">My Movie Posts</Link></button>
        <br/>
        <br/>
        <button className="logout" onClick={this.handleLogout}><Link to="/">Logout</Link></button>
        <h2 className="positionRight"> Account Information </h2>
        <div className="AccountInfoWrapper">
          <p id="text">Username: {this.props.username}</p>
          <p id="text">Email: {this.props.email}</p>
          <br/>
          <button className="update"><Link to="/update">Update Info</Link></button>
        </div>

      </div>
    );
}
}
