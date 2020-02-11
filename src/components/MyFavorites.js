import React from 'react'
import Movie from './Movie'

class MyFavorites extends React.Component {

  // componentDidMount() {
  //   this.props.setMovies()
  // }

  render(){
    const movieList = this.props.movies.map(movie =>{
      return <Movie key={movie.id} handleFavMovie={this.props.favMovie} handleDeleteMovie={this.props.deleteMovie} {...movie}/>
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
