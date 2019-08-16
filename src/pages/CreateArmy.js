import React, { Component } from 'react';
import withAuth from '../components/withAuth.js';

class CreateArmy extends Component {
  render() {
    
    return (
      <div>
        <h1>New Army</h1>
      </div>
    )
  }
}

export default withAuth(CreateArmy);