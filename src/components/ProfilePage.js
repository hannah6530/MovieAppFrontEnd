import React from 'react';



export default class ProfilePage extends React.Component{

  componentDidMount(){
    if(!localStorage.token){
      this.props.history.push('/')
    }
  }

  handleLogout = () => {
    console.log()
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
      <br/>
      <br/>
      <button className="logout" onClick={this.handleLogout}>Logout</button>
      </div>
    );
}
}
