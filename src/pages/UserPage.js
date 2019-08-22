import React, { Component } from 'react'
import Footer from '../components/Footer';

class UserPage extends Component {
    render() {
        return (
            <div>
                <h1>MAQUEDA EL DEVORADOR DE MACARRONES</h1>
                <img src='https://cdn1.iconfinder.com/data/icons/runes-vikings/205/ThorHammer-512.png' alt='ProfilePic' width='50%' height='50%'/>
                <Footer />
            </div>
        )
    }
}

export default UserPage;