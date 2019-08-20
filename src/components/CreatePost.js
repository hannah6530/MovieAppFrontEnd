import React from 'react'

class CreatePost extends React.Component {

  state = {
    name: '',
    genre: '',
    rating: '',
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()

  }


  render(){


    return(
      <div className="model" id="modal">
          <span className="modelHeading">Enter Movie Details</span>

          <form id="create_form" action="#" onSubmit={this.handleSubmit}>
                <input type='text' placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                <input type='text' placeholder="Genre" name="genre" value={this.state.genre} onChange={this.handleChange}/>
                <input type='text' placeholder="Rating" name="rating" value={this.state.rating} onChange={this.handleChange}/>
                <button className="registerButton" type="submit">Submit</button>
          </form>
      </div>

    )
  }


}
export default CreatePost
