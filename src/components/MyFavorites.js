import React from 'react'
import Movie from './Movie'
import { Grid } from 'semantic-ui-react'

class MyFavorites extends React.Component {

  // componentDidMount() {
  //   this.props.setMovies()
  // }

  render(){
    const movieList = this.props.movies.map(movie =>{
      return <Movie key={movie.id}  handleDeleteMovie={this.props.deleteMovie} {...movie}/>
    })

    return(
      <div className="ui grid container">
          <div id="movie_post_list">
            <ul>
              {movieList}
            </ul>
          </div>
        </div>
    )
  }

}
export default MyFavorites;
