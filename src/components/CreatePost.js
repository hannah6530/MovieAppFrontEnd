import React from 'react'

class CreatePost extends React.Component {

  state = {
    name: '',
    genre: '',
    rating: '',
    watch_link: '',
    image: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {
        this.props.history.push('/movies')
       })
    }

  render(){
    console.log(this.props.userId)
    return(
      <div className="model" id="modal">
          <span className="modelHeading">Enter Movie Details</span>
          <form id="create_form" action="#" onSubmit={this.handleSubmit}>
                <input type='text' placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                <input type='text' placeholder="Genre" name="genre" value={this.state.genre} onChange={this.handleChange}/>
                <input type='text' placeholder="Rating" name="rating" value={this.state.rating} onChange={this.handleChange}/>
                <input type='text' placeholder="Watch_Link" name="watch_link" value={this.state.watch_link} onChange={this.handleChange}/>
                <input type='text' placeholder="image" name="image" value={this.state.image} onChange={this.handleChange}/>
                <button className="registerButton" type="submit">Submit</button>
          </form>
      </div>

    )
  }


}
export default CreatePost
