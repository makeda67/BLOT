import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth';

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
            <div>
                {this.props.isLoggedIn && !this.state.isLoading ? (
                    <>
                <Link to="/private">
                <img src="https://www.pngfind.com/pngs/m/179-1795154_round-larp-viking-shield-round-shield-vikings-weapons.png" alt="Button" weight="50px" height="50px" align="center"></img>
                </Link>
                </>
                ): <p>not logged or loading</p>}
            </div>
        )
    }
}

export default withAuth(Footer);