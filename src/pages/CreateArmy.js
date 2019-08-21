import React, { Component } from 'react';
import { withRouter } from 'react-router';
import withAuth from '../components/withAuth.js';
import Errors from '../errors/Errors.js';
import Army from '../services/army-service.js';
import Cards from '../components/Cards';

class CreateArmy extends Component {
  
  state = {
    name: '',
    quantity: '',
    armyId: this.props.match.params.id,
    currentGold: 300 
  }

  handleAddSoldiers = (quantity, soldierName, soldierId) => {
    quantity = Math.round(100*quantity)/100;
      const newSoldierArmy = {
        quantity,
        soldierId
      }
    const { handleAddToArmy } = this.props;
      handleAddToArmy(newSoldierArmy, soldierName);
  }
  

  handleChange = (event) => {
    this.state({
      [event.target.name]: event.target.value
    })
  }

  changeState = (currentGold) => {
    this.setState({
      currentGold 
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { inputValue } = this.state;
    if(inputValue === '') {
      this.setState({
        emptyField: true
      })
    } else {
      const cohort = Errors.handleArmyCreation(inputValue);
      cohort["soldiers"] = [];
      Army.editArmy(cohort)
        .then( (user) => {
            const {setUser} = this.props;
            setUser(user);
            this.props.history.push('/user')
          })
      .catch((error) => {
          console.log(error)
          this.setState({
            inputValue: ''
          })
        });
      }
    }

  render() {
    const {handleChange, handleSubmit, armyId, currentGold} = this.state;
    return (
      <div>
        {/* <h1>New Army</h1>
        <form onChange={handleSubmit}>
          <label>Army name</label>
          <input type='text' name='name' id='name' value='Army name' onChange={handleChange}/>
          <h3>Troops:</h3>
          <div className="soldier-card">
            <Cards />
            <label>Quantity:</label>
            <input type='number' name='quantity' id='quantity' vale='quantity' onChange={handleChange}/>
          </div> 
          
          
          <button type='submit'>Create Army</button>
        </form> */}
        <h1>Modify the army</h1>
        <h1>{currentGold}</h1>
        <form onChange={handleSubmit}>
          <label>Army name</label>
          <input type='text' name='name' id='name' onChange={handleChange}/>
          <Cards changeState={this.changeState} armyId={armyId} currentGold={currentGold}/>

        </form>
      </div>
    
    
    )
  }
}

export default withRouter(withAuth(CreateArmy));