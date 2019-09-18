import React from 'react'
import { Grid, Image} from 'semantic-ui-react'

const Movie = (props) => {

  return(
    <div className="ui equal width grid">
      <div className="six wide column">
        <div className="ui segment">
          <a href="#">
            <img className="ui image" src={props.image}/>
          </a>
    </div>
      </div>
        </div>
  )

}

export default Movie;
