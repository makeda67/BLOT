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
      <div className='Navbar'>
        {this.props.isLoggedIn && !this.state.isLoading ? (
          <>
            <img src={this.props.user.profileImg} alt='Profile pic' width="40px" height="40px"></img>
            <Link to={`/user/${this.props.user._id}`}>{this.props.user.name}</Link>
              <div className='gold-container'>
                <img src={this.props.user.goldImg} alt='Gold' width='20%' height='100%'/>
                <p>{this.props.user.gold}</p>
              </div>
            <button className='logout-button' onClick={this.props.logout}>Logout</button>
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