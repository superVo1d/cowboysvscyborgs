import React from 'react'

import { Link } from "react-scroll"

const Delivery = () => {
  return (
    <div id="delivery" className="container-fluid text-white" style={{position: "relative", paddingTop: "120px", paddingBottom: "120px", backgroundColor: "rgb(92, 192, 208)"}}>
      <Link to="delivery" smooth={true} duration={600} style={{position: "absolute", height: "200px", width: "100vw", left: 0, top: "-120px"}} />
      <Link to="accordeon-container" smooth={true} duration={600} style={{position: "absolute", height: "120px", width: "100vw", left: 0, top: 0}} />
      
      <div className="row m-w-container">
        <div className="col col-lg-8 offset-lg-2 text-center position-relative">
          <h2>БЕСПЛАТНАЯ ДОСТАВКА</h2>
          <img className="w-100 py-5" src="/images/delivery.svg" style={{maxWidth: 240}} />
          <p className="lead text-white">Мы&nbsp;доставляем заказы курьером СДЭК в&nbsp;течение 2-3 часов с момента заказа в&nbsp;Москве и&nbsp;Московской области и&nbsp;в&nbsp;течение 2&nbsp;рабочих дней по&nbsp;России.</p>
        </div>
      </div>

      <Link to="feedback" smooth={true} duration={600} style={{position: "absolute", height: "120px", width: "100vw", left: 0, bottom: 0}} />
      <Link to="delivery" smooth={true} duration={600} style={{position: "absolute", height: "120px", width: "100vw", left: 0, bottom: "-120px", zIndex: 1}} />
    </div>
  )
}

export default Delivery;