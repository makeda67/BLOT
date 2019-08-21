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
            {/* <img src="https://cdn1.iconfinder.com/data/icons/runes-vikings/205/ThorHammer-512.png" alt='Profile pic' width="20px" height="20px"></img> */}
            <img src={this.props.user.profileImg} alt='Profile pic' width='20px' height='20px'/>
            <Link to='/user/:id'>{this.props.user.name}</Link>
              <div className='gold-container'>
                {/* <img src='https://cdn0.iconfinder.com/data/icons/finance-colored-outlined-pixel-perfect/64/finance-20-512.png' alt='Gold' width="20%" height="100%" /> */}
                <img src={this.props.user.goldImg} alt='Gold' width='20%' height='100%'/>
                <p>{this.props.user.gold}</p>
              </div>
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