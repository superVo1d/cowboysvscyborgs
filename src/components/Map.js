import React from 'react';

import { Link } from "react-scroll";

const Map = (props) => {
  return (
    <div id="map" className="container-fluid" style={{paddingTop: "120px", paddingBottom: "120px"}}>
      <Link to="map" smooth={true} duration={600} style={{position: "absolute", height: "200px", width: "100vw", left: 0, top: "-200px"}} />
      <Link to="second-screen" smooth={true} duration={600} style={{position: "absolute", height: "120px", width: "100vw", left: 0, top: 0}} />
      
      <div className="row m-w-container">
        <div className="col text-center">
          <h2>ОТКРОЙ НОВЫЙ СВЕТ ЗАНОВО</h2>
          <img className="map w-100 pt-5" src="/images/map.svg" />
            <p className="font-weight-bold pt-3 position-absolute" style={{color: "#6e3cb8", top: "82%", right: "59%"}}>Эль-Пасо</p>
        </div>
      </div>

      <Link to="accordeon-container" smooth={true} duration={600} style={{position: "absolute", height: "120px", width: "100vw", left: 0, bottom: 0}} />
      <Link to="map" smooth={true} duration={600} style={{position: "absolute", height: "120px", width: "100vw", left: 0, bottom: "-120px", zIndex: 1}} />
    </div>
  )
}

export default Map;