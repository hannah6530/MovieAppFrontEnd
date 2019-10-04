import React from 'react'
import Movie from './Movie'
import { Grid } from 'semantic-ui-react'


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
      <div className="ui grid container">
        <div className="four wide coloumn">
          {movieList}
        </div>
      </div>
    )
  }

}
export default MovieCollection;
