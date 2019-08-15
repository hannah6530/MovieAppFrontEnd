import React from 'react'

class CreatePost extends React.Component {

  state = {
    genre: '',
    name: '',
    link: ''
  }


  render(){


    return(
      <div className="model" id="modal">
          <span className="modelHeading">Enter Your Details</span>

          <form id="create_form" action="#" onSubmit={this.handleSubmit}>
                <input type='text' placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                <input type='text' placeholder="Genre" name="genre" value={this.state.genre} onChange={this.handleChange}/>
                <input type='text' placeholder="Movie Link" name="link" value={this.state.link} onChange={this.handleChange}/>
                <button className="registerButton" type="submit">Submit</button>
          </form>
      </div>

    )
  }


}
export default CreatePost
