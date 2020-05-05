import React, { useState, useEffect } from 'react';

import FirstScreen from './components/FirstScreen.js';
import ShoppingCart from './components/ShoppingCart.js';
import SecondScreen from './components/SecondScreen.js';
import Showcase from './components/Showcase.js';
import Feedback from './components/Feedback.js';
import Footer from './components/Footer.js';
import YandexMetrika from './components/YandexMetrika.js';
import Accordeon from './components/Accordeon.js';
import Popup from './components/Popup.js'
import OpenRulesButton from './components/OpenRulesButton.js'
//import Map from './components/Map.js'
import GifAdder from './components/GifAdder.js'

const App = () => {

  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get('utm_content'));

  const [isOpenRight, setIsOpenRight] = useState(false)

  const [rulesButtonIsActive, setRulesButtonIsActive] = useState(false)

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

  function listener() {
    if (window.pageYOffset > document.documentElement.clientHeight) {
      setRulesButtonIsActive(true)
    } else {
      setRulesButtonIsActive(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return (
    <div className="App">
      {(id === 1) && <GifAdder />}
      <Popup id={id} />
      <OpenRulesButton rulesButtonIsActive={rulesButtonIsActive} />
      <ShoppingCart />
      <FirstScreen id={id}
      handleClickLeft={handleClickLeft}
     handleClickRight={handleClickRight}/>
      <SecondScreen id={id} />
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
