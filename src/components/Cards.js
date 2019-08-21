import React, { Component } from 'react';
import armyService from '../services/army-service';

class Cards extends Component {
    state = {
        armies: [],
        quantity0: 0,
        quantity1: 0,
        quantity2: 0,
        quantity3: 0,
        message: false,
        initialGold: this.props.currentGold
    }

    componentDidMount() {
        armyService.getArmy(this.props.armyId)
        .then(response => {
      
            this.setState({
                armies: response.soldiers
            })
        })
    }

    componentDidUpdate() {
        // const {maxGold, quantity0, quantity1, quantity2, quantity3} = this.state;
        // const currentGold = maxGold - (quantity0*30) - (quantity1*40) - (quantity2*40) - (quantity3*30);
        // if(currentGold === maxGold) {
        //     this.setState({
        //         currentGold,
        //     })
        // } else {
        //     this.setState({
        //         currentGold
        //     })
        // }
        
    }

    handleChange = async (event) => {
        await this.setState({
            [event.target.name]: event.target.value
        })
       await this.changeGold()
    }
    
    changeGold = ()=>{
        const { quantity0, quantity1, quantity2, quantity3, initialGold} = this.state;
        const currentGold = initialGold - (quantity0*30) - (quantity1*40) - (quantity2*40) - (quantity3*30);
        if(currentGold < 0 ){
            this.setState({
                message: true
            })
            this.props.changeState( 0 )
        } else {
            this.props.changeState( currentGold )
        }
    }

    
    handleSubmit = (event) => {
        event.preventDefault();

    }

    render() {

        const {armies, message} = this.state;
        return (
            <div>
                {armies.length > 0 ? armies.map((army, index) => {
              
                    return (
                        <article key={army._id} className='army-container'>
                            <form>
                                <p><img src={army.img} alt='Unit icon' /></p>
                                <p>{army.name}</p>
                                <p>{army.price}</p>
                                <p>{army.description}</p>

                                <input type='number' name={`quantity${index}`} id='quantity' value={this.state.quantity} onChange={this.handleChange}/>
                            </form>

                            
                            

                        </article>
                    )
                }) : <p>Loading...</p>}
            </div>
        )
    }
}

export default Cards;