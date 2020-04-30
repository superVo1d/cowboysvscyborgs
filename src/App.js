import React, { useState } from 'react';

import FirstScreen from './components/FirstScreen.js';
import ShoppingCart from './components/ShoppingCart.js';
import SecondScreen from './components/SecondScreen.js';
import Showcase from './components/Showcase.js';
import Feedback from './components/Feedback.js';
import Footer from './components/Footer.js';
import YandexMetrika from './components/YandexMetrika.js';
import Accordeon from './components/Accordeon.js';
import Popup from './components/Popup.js'


const App = () => {

  const [isOpenRight, setIsOpenRight] = useState(false)

  function handleClickLeft() {
    if (isOpenRight) {
      setIsOpenRight(state => !state)
    }
  }

  function handleClickRight() {
    if (!isOpenRight) {
      setIsOpenRight(state => !state)
    }   
  }

  return (
    <div className="App">
      <ShoppingCart />
      <FirstScreen handleClickLeft={handleClickLeft}
                  handleClickRight={handleClickRight}/>
      <SecondScreen />
      <Accordeon isOpenRight={isOpenRight} 
              setIsOpenRight={setIsOpenRight} 
             handleClickLeft={handleClickLeft}
            handleClickRight={handleClickRight}/>
      <Showcase />
      <Feedback />
      <Footer />
      <YandexMetrika />
    </div>
  );
}

export default App;
