import React from 'react'

class NavBar extends React.Component{

  render(){
    return(
      <header>
        <h4 className="logo">Movie Splazz</h4>
        <nav>
            <ul class="navLinks">
                <li><a href="#">Home</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Favorites</a></li>
                <li><a href="#">Create Post</a></li>
            </ul>
      </nav>
      </header>
    )
  }
}


















export default NavBar
