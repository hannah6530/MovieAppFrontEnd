import React from 'react'

class NavBar extends React.Component{


  render(){
    return(
      <header>
        <h4 className="logo">Movie Splazz</h4>
        <nav>
            <ul className="navLinks">
                <li><a href="/profile">Profile</a></li>
                <li><a href="/movies">Movies</a></li>
                <li><a href="/post">Create Post</a></li>
            </ul>
      </nav>
      </header>
    )
  }
}


















export default NavBar
