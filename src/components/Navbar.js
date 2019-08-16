import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth';

class Navbar extends Component {
state = {
  isLoading: true
}

  componentDidMount() {
    if(this.props.user) {
        this.setState({
        isLoading: false
      })
    }
    
  }
  
  render() {  
    return (
      <div>
        {this.props.isLoggedIn && !this.state.isLoading ? (
          <>
            <img src="https://cdn1.iconfinder.com/data/icons/runes-vikings/205/ThorHammer-512.png" alt='Profile pic' width="20px" height="20px"></img>
            <Link to='/user/:id'>{this.props.user.name}</Link>
            <p>{this.props.user.gold}</p>
            <button onClick={this.props.logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </>
        )}
        
        
      </div>
    )
  }
}

export default withAuth(Navbar);