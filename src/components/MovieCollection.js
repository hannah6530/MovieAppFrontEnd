import React from 'react'
import Movie from './Movie'
import { Card } from 'semantic-ui-react'


class MovieCollection extends React.Component {

  componentDidMount() {
    this.props.setMovies()
  }

  render(){
    const movieList = this.props.movies.map(movie =>{
      return <Movie key={movie.id}  movie={movie}/>
    })

    return(
      <Card.Group itemsPerRow={4}>
      {movieList}
      </Card.Group>

    )
  }

}
export default MovieCollection;
