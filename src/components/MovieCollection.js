// when you refresh page it goes blank and when i click on the movies link it does nothing
//when i click on the profile page and then click movies the data appears again
import React from 'react'
import Movie from './Movie'
import { Grid, Card } from 'semantic-ui-react'


class MovieCollection extends React.Component {

  componentDidMount() {
    this.props.allmovies()
  }

  render(){
    const movieList = this.props.movies.map(movie =>{
      return <Movie key={movie.id}
      handleDeleteMovie={this.props.deleteMovie}
      handleFavMovie={this.props.favMovie}
      {...movie}/>
    })

    return(

    <div className="ui grid container" >
      <div className="five column row">
       <div className="three wide column">
        {movieList}
        </div>
        </div>
        </div>

    )
  }

}
export default MovieCollection;
