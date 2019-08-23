import React, { Component } from 'react';
import armyService from '../services/army-service';
import {Redirect} from 'react-router-dom';

class Button extends Component {
state = {
    redirect: false,
    armyId: ''
}
    createArmy = (e) => { 
        e.preventDefault();
        armyService.createArmy()
        .then((response) =>{
            console.log(response)
            this.setState({
                redirect: true,
                armyId: response[0]._id
        })
        })

    }

    render() {
        const {redirect, armyId} = this.state;
        if(redirect === false) {
          
            return (
                <div>
                   <button onClick={this.createArmy} className='button-create'><img src="https://cdn.shopify.com/s/files/1/0478/9073/products/300_rotated_1024x1024.jpg?v=1546971612" alt="Button" weight="50px" height="50px" align="center"></img>
                   <p className='p-special'>+</p>
                   </button> 
                </div>
                )
        } else {           
            return <Redirect to={`/private/${armyId}`} />
        }
        
    }
}

export default Button;