import React, { Component } from 'react';
import army from '../services/army-service.js'
import {withRouter} from "react-router-dom";
import { thisExpression } from '@babel/types';
class UserTroops extends Component {
    state = {
        armies: [],
        army: {},
        loading: true,
      }

componentDidMount (){
    army.getMyArmy()
    .then((response) => {
        console.log(response.armies)
        this.setState({
            armies: response.armies,
            army: response.armies[0],
            loading: false,
        })
    })
}

handleDeleteClick = (armyId) => {
    army.deleteOneArmy(armyId)
        .then((data)=>{
            this.props.history.push("/private")
        })
}

    render() {
        const {army} = this.state;
        console.log(army, this.state)
        return (
            <div className='my-army'>
                {!this.state.loading && this.state.armies.length > 0 ? <> <h3>{army.name}</h3>
                {army.soldiers.map((solidier)=>{
                    return <div className='my-soldiers'>
                        <img src={solidier.img} alt='soldier img'/>
                        <p>{solidier.name}</p>
                        <p className='quantity'>x {solidier.quantity}</p>
                    </div>
             
                })}
                <button className='delete-button' onClick={() => {
                    this.handleDeleteClick(army._id)
                }}>DELETE</button></> : <p className='empty-army'>You have no armies!</p>}
                
            </div>
        )
    }
}

export default withRouter(UserTroops);