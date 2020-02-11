import React from 'react'
import { Grid, Image, Icon, Card} from 'semantic-ui-react'
import { withRouter } from 'react-router';

const Movie = (props) => {

  let handleClick = () => {
    props.handleDeleteMovie(props)
  }
  let handleClickFav = () => {
    props.handleFavMovie(props)
    if(props.history){
        props.history.push("/favorites")
    }
  }

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

export default withRouter(Movie);
