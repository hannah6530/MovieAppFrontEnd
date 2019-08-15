import React from 'react';
import './App.css';
import Login from './components/Login'


class App extends React.Component{



  render(){
    return(
      <div>
      <h1 class="title">Welcome to Movie Splazz</h1>
 <h3 class="header"> Where you can add postings of your favorite movies! </h3>
      <Login  />
      </div>

    )

  }

}

export default App;
