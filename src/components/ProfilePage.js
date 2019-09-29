import React from 'react';
import { Link } from 'react-router-dom';


export default class ProfilePage extends React.Component{

  componentDidMount(){
    if(!localStorage.token){
      this.props.history.push('/')
    }
  }

  handleLogout = () => {
    if(localStorage.token){
      this.props.logout()
    }
  }

  render()
    {
      return(
      <div>
        <h2>Hello {this.props.name}</h2>
        <br/>
        <button className="favoriteButton">Favorites</button>
        <br/>
        <button className="favoriteButton"><Link to="/my_movie_posts">My Movie Posts</Link></button>
        <br/>
        <br/>
        <button className="logout" onClick={this.handleLogout}><Link to="/">Logout</Link></button>
        <div className="AccountInfoWrapper">
          <h2> Account Information </h2>
          Username: {this.props.username}
          <br/>
          Email: {this.props.email}
        </div>

      </div>
    );
}
}
