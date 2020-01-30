import React from 'react'
import { Grid, Image, Icon} from 'semantic-ui-react'

const Movie = (props) => {

  let handleClick = () => {
    props.handleDeleteMovie(props)
  }
  let handleClickFav = () => {
    props.handleFavMovie(props)
  

  }

  return(
    <div className="ui equal width grid">
      <div className="six wide column">
        <div className="ui segment">
          <a href="#">
            <img className="ui image" src={props.image}/>
            <Icon name='trash alternate' size='large' onClick={handleClick}/>
            <i className="heart outline icon" onClick={handleClickFav}></i>
          </a>
    </div>
      </div>
        </div>
  )

}

export default Movie;
