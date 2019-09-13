import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Movie = (props) => {
  return(
    <Card>
      <Image src={props.movie.image}/>
      <Card.Content>
        <Card.Header>{props.movie.name}</Card.Header>
        <Card.Description>
        Genre: {props.movie.genre}
        <br/>
        Rating: {props.movie.rating}
        <br/>
        <a href={props.movie.watch_link}> Watch Here </a>
        </Card.Description>
      </Card.Content>
    </Card>
  )

}
export default Movie;
