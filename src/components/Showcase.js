import React, { useState } from 'react';
import AddToCartButton from './AddToCartButton.js';
import Popup from './Popup.js';
import { Link } from "react-scroll";

const Showcase = (props) => {

  const [ popupWasOpened, setPopupWasOpened ] = useState(false)

  return (
    <>
    {/*popupWasOpened && <Popup />*/}
    <div id="shop" className="container-fluid position-relative" style={{paddingTop: "120px", paddingBottom: "120px"}}>
      <Link to="accordeon-container" smooth={true} duration={600} style={{position: "absolute", height: "120px", width: "100vw", left: 0, top: "0", zIndex: 1}} />
      <div className="row px-0 px-sm-5 m-w-container">
        <div className="col text-center px-0 px-sm-3">
          <h2>ВЫБЕРИ КОМПЛЕКТ</h2>
            <div className="d-inline-block lead pt-5">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="false">БАЗОВЫЙ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="true">СТАНДАРТ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">ДЕЛЮКС</a>
              </li>
            </ul>
          </div>
          </div>
      </div>
      <div className="row pt-5 m-w-container" >
        <div className="col-12 col-lg-7 px-3 px-sm-5" style={{marginBottom: "120px"}}>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner px-5">
              <div className="carousel-item active">
                <img className="d-block w-100" src="/images/box-scene.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="/images/cvsc-card-mockup.png" alt="Second slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-5 px-0 px-sm-5">
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <ul>
                  <li>
                    <h3>4 персонажа</h3>
                    <p className="lead">Сыграй каждым</p>
                  </li>
                  <li>
                    <h3>4 фигурки</h3>
                    <p className="lead">Наши фигурки напечатаны на&nbsp;3D&nbsp;принтере</p>
                  </li>
                  <li>
                    <h3>1 карта</h3>
                    <p className="lead">Отличный повод начать</p>
                  </li>
              </ul>
              <div className="pt-5" style={{marginLeft: "2.4em"}}>
                <h2 style={{marginRight: ".5em", float: "left"}}>790&nbsp;руб</h2>
                <h2 className="old-price">990&nbsp;руб</h2>
                <p className="font-weight-bold pt-3" style={{color: "#6e3cb8"}}>Этот набор сегодня купили 3&nbsp;раза</p>
                <p className="lead main-btn-group">
                  <AddToCartButton btnId={1} setPopupWasOpened={setPopupWasOpened} />
                </p>
              </div>            
            </div>
            <div className="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <ul>
                  <li>
                    <h3>8 персонажей</h3>
                    <p className="lead">Хорошая компания для игры</p>
                  </li>
                  <li>
                    <h3>8 фигурок</h3>
                    <p className="lead">Наши фигурки напечатаны на&nbsp;3D&nbsp;принтере</p>
                  </li>
                  <li>
                    <h3>1 карта</h3>
                    <p className="lead">Отличный повод начать</p>
                  </li>
              </ul>
              <div className="pt-5" style={{marginLeft: "2.4em"}}>
                <h2 style={{marginRight: ".5em", float: "left"}}>990&nbsp;руб</h2>
                <h2 className="old-price">1290&nbsp;руб</h2>
                <p className="font-weight-bold pt-3" style={{color: "#6e3cb8"}}>Этот набор сегодня купили 5&nbsp;раз</p>
                <p className="lead main-btn-group">
                  <AddToCartButton btnId={2} setPopupWasOpened={setPopupWasOpened} />
                </p>
              </div>            
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
              <ul>
                  <li>
                    <h3>10 персонажей</h3>
                    <p className="lead">Все в&nbsp;сборе</p>
                  </li>
                  <li>
                    <h3>10 фигурок</h3>
                    <p className="lead">Наши фигурки напечатаны на&nbsp;3D&nbsp;принтере</p>
                  </li>
                  <li>
                    <h3>2 уникальные карты</h3>
                    <p className="lead">Для прирожденных исследователей</p>
                  </li>
              </ul>
              <div className="pt-5" style={{marginLeft: "2.4em"}}>
                <h2 style={{marginRight: ".5em", float: "left"}}>1290&nbsp;руб</h2>
                <h2 className="old-price">1590&nbsp;руб</h2>
                <p className="font-weight-bold pt-3" style={{color: "#6e3cb8"}}>Этот набор сегодня купили 2&nbsp;раза</p>
                <p className="lead main-btn-group">
                  <AddToCartButton btnId={3} setPopupWasOpened={setPopupWasOpened} />
                </p>
              </div>            
            </div>
          </div>
        </div>
      </div>
      <Link to="feedback" smooth={true} duration={600} style={{position: "absolute", height: "120px", width: "100vw", left: 0, bottom: "0"}} />
      <Link to="shop" smooth={true} duration={600} style={{position: "absolute", height: "120px", width: "100vw", left: 0, bottom: "-120px", zIndex: 1}} />
    </div>
    </>
  )
}

export default Showcase;
