import React from 'react';

export default class ProfilePage extends React.Component{

  componentDidMount(){
    if(!localStorage.token){
      this.props.history.push('/')
    }
  }
  render()
    {
      return(
      <div>
      Logged In As {this.props.username}
      </div>
    );
}
}
