import React, { useRef, useState, useEffect } from 'react';

import { Link, scroller } from "react-scroll";


const FirstScreen = (props) => {

  const firstScreen = useRef(0);
  const [ height, setHeight ] = useState(0);
  
  function leftClicked(e) {
      e.preventDefault()

      scroller.scrollTo('anchor', {
        duration: 400,
        delay: 100,
        smooth: true,
        offset: 50, 
      })

      props.handleClickLeft()
  }

  function rightClicked(e) {
      e.preventDefault()
      
      scroller.scrollTo('anchor', {
        duration: 400,
        delay: 100,
        smooth: true,
        offset: 50, 
      })

      props.handleClickRight()
  }

  useEffect(() => {
    setHeight(firstScreen.current.clientHeight)

    const handleResize = () => {
      setHeight(firstScreen.current.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })


  return (
    <>
    <div id="small-screen-bg" style={{height: height + 120}}></div>
    <div className="container-fluid" id="first-screen" style={{padding: 0}}>
      <div className="row m-w-container" style={{minHeight: "687px"}}>
        <div className="col" ref={firstScreen}>
          <div className="jumbotron px-0">
            <h1 className="display-5"><span id="title-label">Настольная игра</span><br />«КОВБОИ ПРОТИВ КИБОРГОВ»</h1>
            <p className="lead">Собирайся в&nbsp;захватывающее приключение по&nbsp;маршруту &nbsp;Эль&#8209;Пасо&nbsp;&mdash;&nbsp;Детройт!</p>
            <p className="d-inline-block lead font-weight-bold mb-0 mr-5">От&nbsp;14&nbsp;лет и&nbsp;старше</p>
            <p className="d-inline-block lead font-weight-bold">2-10&nbsp;игроков</p>
            <p className="lead main-btn-group">
            <Link className="btn btn-outline-primary btn-lg mt-4 mr-3" to="second-screen" smooth={true} duration={600}>ОБ ИГРЕ</Link>
              <Link className="btn btn-primary btn-lg mt-4" to="shop" smooth={true} duration={600}>КУПИТЬ</Link>
            </p>
          </div>
        </div>
        <div className="col-3 col-lg-4" id="first-screen-image" style={{backgroundImage: (props.id === 1) ? "url('https://supervo1d.github.io/cowboysvscyborgs/images/wallpaper-green.png')" : "url('https://supervo1d.github.io/cowboysvscyborgs/images/adventure-bg.png')"}}></div>
        <div className="cvsc-card-container cvsc-card-container-sm position-relative" style={{marginTop: "90px"}}>
          <div style={{width: "790px"}}>
            <Link className="cvsc-card" to="shop" smooth={true} duration={600} role="button">
              <h3>Что внутри</h3>
            </Link>
            <a onClick={e => leftClicked(e)} className="cvsc-card" style={(props.id === 2 || props.id === 6) ? {backgroundImage: "url('https://supervo1d.github.io/cowboysvscyborgs/images/timothy_chalamet.jpg')"} : {backgroundImage: "url('https://supervo1d.github.io/cowboysvscyborgs/images/cowboys.svg')"}} href="/" role="button">
              <h3>Ковбои</h3>
            </a>
            <a onClick={e => rightClicked(e)} className="cvsc-card" style={(props.id === 2 || props.id === 6) ? {backgroundImage: "url('https://supervo1d.github.io/cowboysvscyborgs/images/cyborg-light.jpg')"} : {backgroundImage: "url('https://supervo1d.github.io/cowboysvscyborgs/images/cyborgs.svg')"}} href="/" role="button">
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
              <a onClick={e => leftClicked(e)} className="cvsc-card" style={(props.id === 2 || props.id === 6) ? {backgroundImage: "url('https://supervo1d.github.io/cowboysvscyborgs/images/timothy_chalamet.jpg')"} : {backgroundImage: "url('https://supervo1d.github.io/cowboysvscyborgs/images/cowboys.svg')"}} href="/" role="button">
                <h3>Ковбои</h3>
              </a>
              <a onClick={e => rightClicked(e)} className="cvsc-card" style={(props.id === 2 || props.id === 6) ? {backgroundImage: "url('https://supervo1d.github.io/cowboysvscyborgs/images/cyborg-light.jpg')"} : {backgroundImage: "url('https://supervo1d.github.io/cowboysvscyborgs/images/cyborgs.svg')"}} href="/" role="button"> 
                <h3>Киборги</h3>
              </a>
            </div>    
          </div>
          <div className="scroll">
            <div className="scroll-icon"></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
};

export default FirstScreen;