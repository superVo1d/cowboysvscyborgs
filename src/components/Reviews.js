import React from 'react'

import { Link } from "react-scroll"

const Reviews = (props) => {

  const secondReview = () => {
    if (props.id === 6) {
      return <p className="lead">&laquo;Очаровательно! Цвета коробки отлично сочетаются с&nbsp;моим любимым фильтром в&nbsp;vsco&raquo;</p>
    } else if (props.id === 4) {
      return <p className="lead">&laquo;По&nbsp;Москве игру доставят за&nbsp;пару часов без контакта с&nbsp;курьером. Просто Вау!&raquo;</p>
    } else if (props.id === 1) {
      return <p className="lead">&laquo;Каждую пятницу ловим лулзы с пацанами, ковбоями и киборгами!&raquo;</p>
    } else {
      return <p className="lead">&laquo;На&nbsp;мой День Рождения администрация сделала мне скидку 20&nbsp;процентов на&nbsp;любую покупку. Просто Вау!&raquo;</p>
    }
  }  

  const secondName = () => {
    if (props.id === 6) {
      return "Мария"
    } else if (props.id === 4) {
      return "Слава"
    } else if (props.id === 1) {
      return "MnstrZml"
    } else {
      return "Настя"
    }
  }  

  const thirdReview = () => {
    if (props.id === 6) {
      return <p className="lead">&laquo;На&nbsp;мой День Рождения администрация сделала мне скидку 20&nbsp;процентов на&nbsp;любую покупку. Просто Вау!&raquo;</p>
    } else if (props.id === 4) {
      return <p className="lead">&laquo;Ковбои против Киборгов сочетают в&nbsp;себе экономику как в&nbsp;Монополии и&nbsp;свободу для фантазии как в&nbsp;Диксит&raquo;</p>      
    } else if (props.id === 1) {
      return <p className="lead">&laquo;Последний раз я так залипал только в варик в детстве, кайф..&raquo;</p>      
    } else {
      return <p className="lead">&laquo;Отличная игра для больших и&nbsp;весёлых компаний. Только вчера увидел рекламу, а&nbsp;сегодня уже поиграл почти за&nbsp;всех ковбоев, советую&raquo;</p>      
    }
  }  

  const thirdName = () => {
    if (props.id === 6) {
      return "Диана"
    } else if (props.id === 4) {
      return "Игорь"
    } else if (props.id === 1) {
      return "4hellscream"
    } else {
      return "Ашот"    
    }
  }  

  return (
    <div id="review" className="container-fluid" style={{position: "relative", paddingTop: "120px", paddingBottom: "120px"}}>
      <Link to="review" smooth={true} duration={600} style={{position: "absolute", height: "200px", width: "100vw", left: 0, top: "-120px"}} />
      <Link to="accordeon-container" smooth={true} duration={600} style={{position: "absolute", height: "120px", width: "100vw", left: 0, top: 0}} />
      
      <div className="row m-w-container">
        <div className="col col-lg-8 offset-lg-2 text-center position-relative">
          <h2>О НАС ГОВОРЯТ</h2>
        </div>
      </div>
      <div className="row pt-5 m-w-container">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="review_card mx-0 mx-md-3">
            <div className="userpic" style={{backgroundImage: 'url("images/cowboy_userpic.svg")', backgroundSize: "cover"}}></div>            
            <div className="description">
              <p className="lead font-weight-bold">Камилла</p>
              <p className="lead">&laquo;Люблю игры, которые пытаются меня убедить, что я&nbsp;не&nbsp;зря закончила Эконом МГУ&raquo;</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="review_card mx-0 mx-md-3 mx-lg-0 mt-4 mt-md-0">
            <div className="userpic" style={{backgroundImage: 'url("images/cyborg_userpic.svg")', backgroundSize: "cover"}}></div>            
            <div className="description">
              <p className="lead font-weight-bold">{secondName()}</p>
              {secondReview()}
            </div>
          </div>
        </div>  
        <div className="col-12 col-md-6 col-lg-4">
          <div className="review_card mx-0 mx-md-3 mt-4 mt-lg-0">
            <div className="userpic" style={{backgroundImage: 'url("images/cowboy_userpic.svg")', backgroundSize: "cover"}}></div>            
            <div className="description">
              <p className="lead font-weight-bold">{thirdName()}</p>
              {thirdReview()}
            </div>
          </div>
        </div>              
      </div>

      <Link to="accordeon-container" smooth={true} duration={600} style={{position: "absolute", height: "120px", width: "100vw", left: 0, bottom: 0}} />
      <Link to="review" smooth={true} duration={600} style={{position: "absolute", height: "120px", width: "100vw", left: 0, bottom: "-120px", zIndex: 1}} />
    </div>
  )
}

export default Reviews;