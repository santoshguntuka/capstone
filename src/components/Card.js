import React from 'react';
import './Card.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out Children Who got Adopted  </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/baby1.jpg'
              text='In India there are more than 20 million orphans'
              
              path='/children'
            />
            <CardItem
              src='images/baby2.jpg'
              text='Due to different reasons they join orphanages'
            
              path='/children'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/baby3.jpg'
              text=" they cannot fullfil their Needs'"
             
              path='/children'
            />
            <CardItem
              src='images/baby4.jpg'
              text='Our Job is to make a better future for them'
             
              path='/children'
            />
            <CardItem
              src='images/baby5.jpg'
              text='We want to make this process a lot more simple '
             
              path='/children'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/baby6.jpg'
              text='Parents can adopt children'
             
              path='/children'
            />
            <CardItem
              src='images/main.jpg'
              text='So dont feel shy to Adopt a child '
             
              path='/children'
            />
            <CardItem
              src='images/img-1.jpg'
              text='This way we can Control the fatal growth of population in India'
              
              path='/children'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;