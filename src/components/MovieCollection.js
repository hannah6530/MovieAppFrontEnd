import React from 'react'
import Movie from './Movie'
import { Grid } from 'semantic-ui-react'


class MovieCollection extends React.Component {

  componentDidMount() {
    this.props.setMovies()
  }

  render(){
    const movieList = this.props.movies.map(movie =>{
      return <Movie key={movie.id}  movie={movie}/>
    })

    return(
      <Grid columns={5}>
      {movieList}
      </Grid>
    )
  }

}
export default MovieCollection;