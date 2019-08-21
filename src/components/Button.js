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
            this.setState({
                redirect: true,
                armyId: response._id
        })
        })

    }

    render() {
        const {redirect, armyId} = this.state;
        if(redirect === false) {
          
            return (
                <div>
                   <button onClick={this.createArmy}>jjjjjjjjj</button> 
                </div>
                )
        } else {
            return <Redirect to={`/private/${armyId}/`} />
        }
        
    }
}

export default Button;