import React from 'react'
import Movie from './Movie'


class MovieCollection extends React.Component {

  componentDidMount() {
    this.props.setMovies()

  }


  render(){

    const movieList = this.props.movies.map(movie =>{
      return <Movie key={movie.id}  movie={movie}/>
    })


    return(
      <div>
      {movieList}
      </div>

    )
  }





}
export default MovieCollection;
