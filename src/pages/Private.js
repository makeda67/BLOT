import React, { Component } from 'react';
import withAuth from '../components/withAuth.js';
import Slider from '../components/Slider.js';
import Footer from '../components/Footer.js';

class Private extends Component {
  

  render() {
    
    return (
      <>
      <div>
        <h1>Available troops</h1>
      </div>
      <div className='troops-wrapper'>
        <div className='troops'>
          <img src='https://fireemblemwiki.org/w/images/0/0c/Bs_fe08_innes_sniper_bow.png' alt='Archer Unit' />
          <h2>Archer</h2>
          <p className='p-troops'>Agile and ranged soldiers that will drown enemies troops with arrows. <br/><b>Effective against Swordmen.</b></p>
        </div>
        <div className='troops'>
          <img src='https://fireemblemwiki.org/w/images/6/68/Bs_fe08_ephraim_great_lord_lance.png' alt='Rider Unit' />
          <h2>Rider</h2>
          <p className='p-troops'>Fast and lethal soldiers that will placate even the far away soldiers. <br/><b>Effective against Archers.</b></p>
        </div>
        <div className='troops'>
          <img src='https://fireemblemwiki.org/w/images/4/4a/Bs_fe08_ross_warrior_axe.png' alt='Axemen Unit' />
          <h2>Axemen</h2>
          <p className='p-troops'>Brave and aggressive soldiers that will knock down even the biggest enemies. <br/><b>Effective against Riders.</b></p>
        </div>
        <div className='troops'>
          <img src='https://fireemblemwiki.org/w/images/4/46/Bs_fe08_gerik_mercenary_sword.png' alt='Swordmen Unit' />
          <h2>Swordmen</h2>
          <p className='p-troops'>Tenacious and honorable soldiers that fight with their heart and mind. <br/><b>Effective against Axemen.</b></p>
        </div>
        <Slider />
      </div>
      <Footer />
      </>
    )
  }
}

export default withAuth(Private);