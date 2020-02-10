import React from 'react'
import { Grid, Image, Icon, Card} from 'semantic-ui-react'

const Movie = (props) => {

  let handleClick = () => {
    props.handleDeleteMovie(props)
  }
  let handleClickFav = () => {
    props.handleFavMovie(props)
  }

  console.log(props)

  return(
          <div className="ui segment">
            <a href="#">
              <img className="ui image" src={props.image}/>
              <Icon name='trash icon' size='large' onClick={handleClick}/>
              <i className="heart icon" onClick={handleClickFav}></i>
            </a>
      </div>
  )

}

export default Movie;
