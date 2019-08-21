import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth';
import Button from './Button';

class Footer extends Component {
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
            <div className='Footer'>
                {this.props.isLoggedIn && !this.state.isLoading ? (
                    <>
                    <Link to="/private">
                        <img src="https://www.pngfind.com/pngs/m/413-4138637_game-of-thrones-game-of-thrones-shield-png.png" alt="Button" weight="50px" height="50px" align="center"></img>
                    </Link>
                    <Button />
                </>
                ): <p></p>}
            </div>
        )
    }
}

export default withAuth(Footer);