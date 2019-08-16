import React, { Component } from 'react';
import Slide from './Slide.js';
import LeftArrow from './LeftArrow.js';
import RightArrow from './RightArrow.js';

class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        'https://romanmilitary.net/images/sixform.png',
        'http://www.piusxbns.ie/creative_html/0518/darac/battletactic.png',
        'https://romanmilitary.net/images/secform.png',
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }
  
  goToPrevSlide = () => {
    this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1
      }));
  }
  
  goToNextSlide = () => {
    if(this.state.currentIndex === this.state.images.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        })}
  }
  
  render() {
    return (
      <div className="slider">
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.state.images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
        </div>
        <LeftArrow 
         goToPrevSlide={this.goToPrevSlide}
        />
        <RightArrow 
         goToNextSlide={this.goToNextSlide}    
        />
      </div>
    );
  }
}

export default Slider;