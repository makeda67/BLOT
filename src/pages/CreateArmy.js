import React, { Component } from 'react';
import { withRouter } from 'react-router';
import withAuth from '../components/withAuth.js';
import Errors from '../errors/Errors.js';
import Army from '../services/army-service.js';
import Cards from '../components/Cards';
import Footer from '../components/Footer.js';

class CreateArmy extends Component {
  
  state = {
    soldiers: [],
    name: '',
    armyId: this.props.match.params.id,
    currentGold: 300 ,
    Archer: 0,
    Rider: 0,
    Axemen: 0,
    Swordmen: 0,
  }

  componentDidMount() {
    Army.getArmy(this.state.armyId)
    .then(response => {
        this.setState({
            soldiers: response.soldiers
        })
    })
  }
  

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      this.changeGold()
    })
  }

  changeGold = () => {
    const { Archer, Rider, Axemen, Swordmen} = this.state;
    const currentGold = 300 - (Archer*30) - (Rider*40) - (Axemen*40) - (Swordmen*30);
    if(currentGold < 0 ){
        this.changeState( 0 )
    } else {
        this.changeState( currentGold )
    }
}

  changeState = (currentGold) => {
    this.setState({
      currentGold 
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const soldiers = [];

    this.state.soldiers.forEach(soldier => {
      soldier.quantity = this.state[soldier.name];
      soldiers.push(soldier)
    })
    Army.editArmy({soldiers: soldiers}, this.props.match.params.id);
    }

  render() {
    const { armyId, currentGold, soldiers} = this.state;
    return (
      <div>
        <h1>Modify the army</h1>
        <h1 className='h1-currentgold'>{currentGold}</h1>
        <form className='create-form' onSubmit={this.handleSubmit}>
          <button className='add-army-button' type='submit'>Add Army</button>
          <label className='army-name'>Army name</label>
          <input type='text' name='name' id='name' onChange={this.handleChange} placeholder='Army name'/>
          <Cards 
          changeState={this.changeState} 
          armyId={armyId} 
          currentGold={currentGold} 
          handleChange={this.handleChange} 
          Archer={this.state.Archer}
          Rider={this.state.Rider}
          Axemen={this.state.Axemen}
          Swordmen={this.state.Swordmen}
          soldiers={soldiers}
          />
        </form>
        <Footer />
      </div>
    
    
    )
  }
}

export default withRouter(withAuth(CreateArmy));