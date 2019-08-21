import React, { Component } from 'react';
import withAuth from '../components/withAuth.js';
import Slider from '../components/Slider.js';
import Footer from '../components/Footer.js';

class Private extends Component {
  render() {
    
    return (
      <>
      <div>
        <h1>Troops</h1>
      </div>
      <div>
        <div>
          <img src='' alt='' />
          <h2>Warrior</h2>
          <p>Warrior description</p>
        </div>
        <div>
          <img src='' alt='' />
          <h2>Archer</h2>
          <p>Archer description</p>
        </div>
        <div>
          <img src='' alt='' />
          <h2>Rider</h2>
          <p>Rider description</p>
        </div>
        <div>
          <img src='' alt='' />
          <h2>Berserker</h2>
          <p>Berserker description</p>
        </div>
        <Slider />
      </div>
      <Footer />
      </>
    )
  }
}

export default withAuth(Private);