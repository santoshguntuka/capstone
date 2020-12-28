  
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';



function HeroSection() {



 
  return (
    <>
    <div className='hero-container'>
    
      <img src = 'images/main.jpg' alt='' className='home-image'/>
      <h2>
        Welcome <br/>
        We are a Agency which make Easier for parents who wants to Adopt  Children from trusts and governament child care centers.
        For more information 
      </h2>
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
       
      </div>
    </div>
    </>
  );
}

export default HeroSection;