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
        console.log('hello')
        armyService.createArmy()
        .then((response) =>{
            console.log(response.soldiers)
            this.setState({
                redirect: true,
                armyId: response._id
        })
        })

    }

    render() {
        const {redirect, armyId} = this.state;
        console.log(redirect)
        if(redirect === false) {
          
            return (
                <div>
                   <button onClick={this.createArmy}>jjjjjjjjj</button> 
                </div>
                )
        } else {
        //     console.log('ishere?')
            return <Redirect to={`/private/${armyId}/`} />
        }
        
    }
}

export default Button;