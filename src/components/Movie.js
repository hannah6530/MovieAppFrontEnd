import React from 'react'

const Movie = (props) => {
  return(
    <div>
      <ul>
        {props.movie.genre}
      </ul>
    </div>
  )

}
export default Movie;
