import React from 'react';
import './App.css';
import Login from './components/Login'
import CreatePost from './components/CreatePost'
import Signup from './components/Signup'
import ProfilePage from './components/ProfilePage'
import NavBar from './components/NavBar'
import MovieCollection from './components/MovieCollection'
import MyFavorites from './components/MyFavorites'
import MyMovies from './components/MyMovies'
import UpdateInfo from './components/UpdateInfo'
import SearchMovies from './components/SearchMovies'
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
    this.setAllMovies();
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


setAllMovies = () => { //allows user to see all movies that were created by all users
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
//write a function called update profile and pass it down to updateinfo.js

setupdateInfo = (username, name, email) => {
  this.setState({
    email: email,
    name: name,
    username: username
  })

}
  setLogin = (username, current_user_id, name, email) => {
    this.setState({
      email: email,
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

 favMovie = (movie, movieInfo) => {
   movieInfo = {movie_id: movie.id, user_id: this.state.current_user_id}
   fetch(`http://localhost:3000/users/${this.state.current_user_id}/favorites`, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
     body: JSON.stringify(movieInfo)
   })
     .then(res => res.json())
     .then(() => {

       this.setState({
         favorites: [...this.state.favorites, movie]
       })

      })
   }



 showFavMovies = (favorites, movie) => {
   if(this.state.current_user_id){
     fetch(`http://localhost:3000/users/${this.state.current_user_id}/favorites/${movie.id}`, {
       method: 'GET'
     })
     .then(res => res.json())
     .then((movieData) => {
       this.setState({
         favorites: movieData.favorites
       })
     })
   }
 }

 handleLogout = () => { //ask tutor to assist with logout button
   if(localStorage.token){
     localStorage.clear()
   }

   this.setState({
     logged_in: ''
   })
 }

 singleMoviePage = (movie) => { //allows user to view the show page for an individual movie they click on
   fetch(`http://localhost:3000/users/${this.state.current_user_id}/movies/${movie.id}`, {
     method: 'GET'
   })
   .then(res => res.json())
   .then(movieData => {
     this.setState({
       movies: movieData.movies
     })
   })
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
            setLogin={this.setLogin}
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
            favMovie={this.favMovie}
            singleMoviePage={this.singleMoviePage}
            {...routerProps}/>} />
          <Route path="/my_movie_posts" render={(routerProps)=> <MyMovies
            favMovie={this.favMovie}
            username={this.state.username}
            setMovies={this.setMovies}
            movies={this.state.movies}
            deleteMovie={this.deleteMovie}
            {...routerProps}/>} />
          <Route path="/favorites" render={(routerProps) => <MyFavorites
            deleteMovie={this.deleteMovie}
            favorites={this.state.favorites}
            favMovie={this.favMovie}
            movies={this.state.movies}
            {...routerProps}/>} />
          <Route path="/update" render={(routerProps) => <UpdateInfo
            current_user_id={this.state.current_user_id}
            setupdateInfo = {this.setupdateInfo}
            {...routerProps}/>} />
            <Route path="/search_movies" render={(routerProps) => <SearchMovies
            {...routerProps}/>} />
        </Switch>
      </div>
    )
  }

}

export default App;
