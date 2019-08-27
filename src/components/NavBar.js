import React from 'react'
import { Link } from 'react-router-dom'
class NavBar extends React.Component{


  render(){
    return(
      <header>
        <h4 className="logo">Movie Splazz</h4>
        <nav>
            <ul className="navLinks">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/createpost">Create Post</Link></li>
            </ul>
      </nav>
      </header>
    )
  }
}


















export default NavBar
