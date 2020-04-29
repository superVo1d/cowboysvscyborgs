import React from 'react';

import { Link } from "react-scroll";

const SecondScreen = () => {
  return (
    <div id="second-screen" className="container-fluid text-white" style={{position: "relative", backgroundColor: "#5cc0d0", marginTop: "120px", paddingTop: "120px", paddingBottom: "120px"}}>
      <Link to="second-screen" smooth={true} duration={600} style={{position: "absolute", height: "200px", width: "100vw", left: 0, top: "-200px"}} />
      <Link to="first-screen" smooth={true} duration={600} style={{position: "absolute", height: "120px", width: "100vw", left: 0, top: 0}} />
      <div className="row m-w-container">
        <div className="col text-center">
          <h2>ТЕБЯ УЖЕ ЖДУТ</h2>
        </div>
      </div>

      <div className="row m-w-container pt-5">
        <div className="col-12 col-md-6 px-0 px-sm-5 frame">
            <span className="helper"></span>
            <img className="card-stack w-100" src="/images/card-stack-blue.png" alt="card-stack-blue.png" />
        </div>
        <div className="col-12 col-md-5 pt-3 pb-0 pb-md-3">
          <div className="advantages-list my-5 ml-5 position-relative">
            <div className="position-absolute">1</div>        
            <h3 className="mb-3 text-left" style={{lineHeight: "2.2rem"}}>
              Любимые герои
            </h3>
            <p className="lead text-left text-white" style={{color: "#cecece"}}>
              Каноничные киборги с&nbsp;оригинальными фичами и&nbsp;харизматичные ковбои
            </p>
          </div>
          <div className="advantages-list my-5 ml-5 position-relative">
            <div className="position-absolute">2</div>
            <h3 className="mb-3 text-left" style={{lineHeight: "2.2rem"}}>
              Продуманные правила
            </h3>
            <p className="lead text-left text-white" style={{color: "#cecece"}}>
              Делай разумные ставки и&nbsp;задави противников интеллектом
            </p>
          </div>
          <div className="advantages-list my-0 ml-5 position-relative">
            <div className="position-absolute">3</div>
            <h3 className="mb-3 text-left" style={{lineHeight: "2.2rem"}}>
              Твои друзья
            </h3>
            <p className="lead text-left text-white" style={{color: "#cecece"}}>
              Собери друзей и&nbsp;стань частью дружелюбного фэндома
            </p>
          </div>
        </div>
      </div>
      <Link to="accordeon-container" smooth={true} duration={600} style={{position: "absolute", height: "120px", width: "100vw", left: 0, bottom: 0}} />
      <Link to="second-screen" smooth={true} duration={600} style={{position: "absolute", height: "120px", width: "100vw", left: 0, bottom: "-120px", zIndex: 1}} />
    </div>
  )
}

export default SecondScreen;