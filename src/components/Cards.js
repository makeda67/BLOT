import React, { Component } from 'react';
import armyService from '../services/army-service';

class Cards extends Component {
    state = {
        armies: []
    }

    componentDidMount() {
        armyService.getArmy()
        .then(response => {
            console.log(response);
            this.setState({
                armies: response.data.soldiers
            })
        })
    }

    render() {
        const {armies} = this.state;
        return (
            <div>
                {armies.length > 0 ? armies.map((army) => {
                    return (
                        <article key={army._id} className='army-container'>
                            <h3>{army.logo}</h3>
                            <p>{army.name}</p>
                            <p>{army.price}</p>
                            
                        </article>
                    )
                }) : <p>Loading...</p>}
            </div>
        )
    }
}

export default Cards;