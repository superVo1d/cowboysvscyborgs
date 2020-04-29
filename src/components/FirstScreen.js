import React from 'react';

import { Link, scroller } from "react-scroll";


const FirstScreen = (props) => {
  
  function leftClicked(e) {
      e.preventDefault()

      scroller.scrollTo('accordeon-left', {
        duration: 400,
        delay: 100,
        smooth: true,
        offset: 50, 
      })

      props.handleClickLeft()
  }

  function rightClicked(e) {
      e.preventDefault()
      
      scroller.scrollTo('accordeon-right', {
        duration: 400,
        delay: 100,
        smooth: true,
        offset: 50, 
      })

      props.handleClickRight()
  }

  return (
    <div className="container-fluid" id="first-screen" style={{padding: 0}}>
      <div className="row m-w-container" style={{minHeight: "687px"}}>
        <div className="col">
          <div className="jumbotron px-0 ">
            <h1 className="display-5">Настольная игра<br />«КОВБОИ ПРОТИВ КИБОРГОВ»</h1>
            <p className="lead">Приведи свою команду к&nbsp;победе в&nbsp;противостоянии Науки и&nbsp;Традиций!</p>
            <p className="d-inline-block lead font-weight-bold mb-0">От&nbsp;14&nbsp;лет и&nbsp;старше</p>
            <p className="d-inline-block lead font-weight-bold ml-5">2-10&nbsp;игроков</p>
            <p className="lead main-btn-group">
            <Link className="btn btn-outline-primary btn-lg mt-4" to="second-screen" smooth={true} duration={600}>ОБ ИГРЕ</Link>
              <Link className="btn btn-primary btn-lg mt-4 ml-3" to="shop" smooth={true} duration={600}>КУПИТЬ</Link>
            </p>
          </div>
        </div>
        <div className="col-3 col-lg-4" id="first-screen-image"></div>
        <div className="cvsc-card-container cvsc-card-container-sm position-relative" style={{marginTop: "90px"}}>
          <div style={{width: "790px"}}>
            <Link className="cvsc-card" to="shop" smooth={true} duration={600} role="button">
              <h3>Что внутри</h3>
            </Link>
            <a onClick={e => leftClicked(e)} className="cvsc-card" href="/" role="button">
              <h3>Ковбои</h3>
            </a>
            <a onClick={e => rightClicked(e)} className="cvsc-card" href="/" role="button">
              <h3>Киборги</h3>
            </a>
          </div>    
        </div>
        </div>
      <div className="m-w-container">
        <div className="position-relative" style={{left: 0}}>
          <div className="cvsc-card-container cvsc-card-container-lg position-absolute" style={{bottom: 20 + 'px'}}>
            <div style={{width: 810 + 'px', position: 'relative', top: 40 + 'px'}}>
              <Link className="cvsc-card" to="shop" smooth={true} duration={600} role="button">
                <h3>Что внутри</h3>
              </Link>
              <a onClick={e => leftClicked(e)} className="cvsc-card" href="/" role="button">
                <h3>Ковбои</h3>
              </a>
              <a onClick={e => rightClicked(e)} className="cvsc-card" href="/" role="button">
                <h3>Киборги</h3>
              </a>
            </div>    
          </div>
          <div className="scroll">
            {/*<p className="lead text-dark">Узнать больше</p>*/}
            <div className="scroll-icon"></div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default FirstScreen;