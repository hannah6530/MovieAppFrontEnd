import React from 'react'
import { Grid, Image} from 'semantic-ui-react'

const Movie = (props) => {

  return(
    <Grid.Column>
      <Image src={props.movie.image}/>
      <span> {props.movie.name} </span>
    </Grid.Column>
  )

}

export default Movie;
