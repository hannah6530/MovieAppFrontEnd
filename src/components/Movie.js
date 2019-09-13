import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Movie = (props) => {
  return(
    <Card>
      <Image src={props.movie.image} />
      <Card.Header>{props.movie.name}</Card.Header>
      <Card.Content>
      Genre: {props.movie.genre}
      <br/>
      Rating: {props.movie.rating}
      <br/>
      <a href={props.movie.watch_link}> Watch Here </a>
      </Card.Content>
    </Card>
  )

}
export default Movie;
