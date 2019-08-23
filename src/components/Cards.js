import React, { Component } from 'react';

class Cards extends Component {
    state = {
        message: false,
        initialGold: this.props.currentGold
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

    render() {

        const {soldiers} = this.props;
        return (
            <div className='army-container-wrapper'>
                {soldiers.length > 0 ? soldiers.map((soldier, index) => {
              
                    return (
                        <article key={soldier._id} className='army-container'>
                
                            <p><img src={soldier.img} alt='Unit icon' /></p>
                            <h3>{soldier.name}</h3>
                            <p className='gold-card'>{soldier.price}</p>
                            <p className='p-card'>{soldier.description}</p>

                            <input type='number' name={soldier.name} id='quantity' value={this.props[soldier.name]} onChange={this.props.handleChange} placeholder='Quantity'/>

                        </article>
                    )
                }) : <p>Loading...</p>}
            </div>
        )
    }
}

export default Cards;