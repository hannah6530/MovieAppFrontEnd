import React from 'react';
import './App.css';
import Login from './components/Login'
import CreatePost from './components/CreatePost'
import Signup from './components/Signup'
import ProfilePage from './components/ProfilePage'
import NavBar from './components/NavBar'
import MovieCollection from './components/MovieCollection'
import Favorites from './components/Favorites'
import MyMovies from './components/MyMovies'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component{

  //create a function that adds a movie to the state of movies and takes a movie as an arguement
  //in the fucntion create a way where the state of movies is updated with the movie
  //pass it down to the createpost componenent
  //in the create post invoke the function through props with the argument
  //use the data from the fetch and pass it into the function
  state = {
    username: '',
    logged_in: '',
    current_user_id: '',
    name: '',
    email: '',
    movies: [],
    favorites: []
  }

  componentDidMount() {
    // let id = (localStorage.token) get user ID based on the token
    if (localStorage.token) {
  fetch('http://localhost:3000/profile', {
    headers: {
      Authorization: localStorage.token
    }
  })
  .then(res => res.json())
  .then(profileData => {
    this.setState({
      current_user_id: profileData.id,
      name: profileData.name,
      email: profileData.email,
      username: profileData.username,
      logged_in: localStorage.token
    })
  })

  }
}


setMovies = () => { //allows the user to see the movie posts they created
  if(this.state.current_user_id ){
    fetch(`http://localhost:3000/users/${this.state.current_user_id}/movies`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(movieData => {
      this.setState({
        movies: movieData.movies
      })
    })
  }
}


setAllMovies = () => {
  if(this.state.current_user_id ){
    fetch("http://localhost:3000/movies", {
      method: 'GET'
    })
    .then(res => res.json())
    .then(movieData => {
      this.setState({
        movies: movieData.movies
      })
    })
  }
}

  setLogin = (username, current_user_id, name) => {
    this.setState({
      name: name,
      username: username,
      current_user_id: current_user_id,
      logged_in: localStorage.token
    })
  }

  handleNewMovie = (movie) => {
    this.setState({
      movies: [...this.state.movies, movie]
    })
  }

  deleteMovie = (movie) => {
        if(this.state.current_user_id){
   fetch(`http://localhost:3000/users/${this.state.current_user_id}/movies/${movie.id}`, {
         method: 'DELETE'
        })
      .then(res => res.json())
.then(() => {
     this.setState({
         movies: this.state.movies.filter(a_movie => movie.id !== a_movie.id)
      })
    })
  }
 }
 handleLogout = () => {
   if(localStorage.token){
     localStorage.clear()
   }
 }
  render(){
    return (
      <div>
        {this.state.logged_in && <NavBar />}
        <Switch>
          <Route path="/profile" render={(routerProps) => <ProfilePage
          username={this.state.username}
          name={this.state.name}
          email={this.state.email}
          logout={this.handleLogout}
          {...routerProps} />} />
          <Route path="/signup" render={(routerProps)=> <Signup
            {...routerProps}/>} />
          <Route exact path="/" render={(routerProps)=> <Login
          setLogin={this.setLogin}
          {...routerProps}/>} />
          <Route path="/createpost" render={(routerProps)=> <CreatePost
            onNewMovie={this.handleNewMovie}
            userId={this.state.current_user_id}
            {...routerProps}/>} />
          <Route path="/movies" render={(routerProps)=> <MovieCollection
            movies={this.state.movies}
            allmovies={this.setAllMovies}
            deleteMovie={this.deleteMovie}
            {...routerProps}/>} />
          <Route path="/my_movie_posts" render={(routerProps)=> <MyMovies
            username={this.state.username}
            setMovies={this.setMovies}
            movies={this.state.movies}
            deleteMovie={this.deleteMovie}
            {...routerProps}/>} />
          <Route path="/favorites" render={(routerProps) => <Favorites
            favorites={this.state.favorites}
            movies={this.state.movies}
            {...routerProps}/>} />
        </Switch>
      </div>
    )
  }

}

export default App;
