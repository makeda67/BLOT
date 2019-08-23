import React, { Component } from 'react'
import Footer from '../components/Footer';
import withAuth from '../components/withAuth'
import UserTroops from '../components/UserTroops';

class UserPage extends Component {
    render() {
        return (
            <div className='profile-container'>
                <h1 className='user-name'>{this.props.user.name}</h1>
                <img src='https://cdn1.iconfinder.com/data/icons/runes-vikings/205/ThorHammer-512.png' alt='ProfilePic' width='50%' height='50%'/>

                <UserTroops />
                <Footer />
            </div>
        )
    }
}

export default withAuth(UserPage);