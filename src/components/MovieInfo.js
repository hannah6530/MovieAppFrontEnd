import React from 'react'

const MovieInfo = (props) => {

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
export default MovieInfo
