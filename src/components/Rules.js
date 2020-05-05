import React, { useState } from 'react';
import { scroller } from "react-scroll";

const Rules = (props) => {

	function closePopupModal(e) {
	    e.preventDefault();
		
		if (e.target.className === 'checkout overlay') {
	    	props.setModal(false);
	    } else if (e.target.className === 'cross-btn position-fixed') {
	    	props.setModal(false);
	    } else if (e.target.className === 'cross-btn-icon') {
	    	props.setModal(false);
	    }
	}

	function handleClose(e) {
		e.preventDefault();

		props.setModal(false);

		scroller.scrollTo('shop', {
			duration: 400,
			delay: 100,
			smooth: true,
			offset: 50, 
		})
	}

	return props.modalIsOpen && (
		<>
			<div onClick={(e) => closePopupModal(e)} className="checkout overlay">
		      <a onClick={(e) => closePopupModal(e)} className="cross-btn position-fixed" role="button" href="/">
		        <img className="cross-btn-icon" src="images/close.svg" alt="close" />
		      </a>
		      <div className="checkout-form popup">
		        <div className="px-3 px-sm-5 py-5">
					<>
					  <h2 className="text-center pb-2">ПРАВИЛА ИГРЫ</h2>
					  <h3>Цель игры</h3>
					  <p className="lead">Захватить контроль над всеми территориями и&nbsp;не&nbsp;остаться банкротом.</p>
					  <h3>Как это сделать</h3>
					  <p className="lead">
						  <ul>
						  	<li>Занимать территории и&nbsp;брать с&nbsp;других игроков плату, за&nbsp;прохождение по&nbsp;своим</li>
						  	<li>Защищать свои территории, когда на&nbsp;них нападает соперник</li>
					  	  </ul>
				  	  </p>
				  	  <h3>Кто ходит первым</h3>
					  <p className="lead">Каждый игрок бросает два кубика. Первым ходит тот, кто выбросил наибольшее количество очков.</p>
					  <h3>Когда подошел ваш ход</h3>
					  <p className="lead">
						  <ul>
						  	<li>Бросьте два кубика.</li>
						  	<li>Переместите вашу фигурку вперед по&nbsp;доске, идя по&nbsp;часовой стрелке, на&nbsp;количество полей, равное сумме выпавших очков.</li>
						  	<li>В&nbsp;зависимости от&nbsp;поля, на&nbsp;которое вы&nbsp;попали, вы&nbsp;должны предпринять соответствующие действия.</li>
						  	<li>Вы&nbsp;можете захватить незанятое поле, купив его. Чем больше цена покупки&nbsp;&mdash; тем больше заплатит оказавшийся на&nbsp;ней соперник.</li>
						  	<li>Если вы&nbsp;попали на&nbsp;своё поле, вы&nbsp;можете увеличить его стоимость, оставив на&nbsp;нём нужную сумму.</li>
						  	<li>Если вы&nbsp;попали на&nbsp;поле занятое соперником вы&nbsp;должны заплатить ему соответствующую сумму. Вы&nbsp;также можете попробовать отыграть эту клетку. Для этого игрокам раздаются по&nbsp;две карты, после чего по&nbsp;очереди делаются ставки. Каждый игрок должен решить, что для него важнее&nbsp;&mdash; воспользоваться способностью полученного героя или побороться за&nbsp;поле.</li>
					  	  </ul>
				  	  </p>
						<p className="lead pt-2">
							<button onClick={(e) => handleClose(e)} type="submit" className="btn btn-lg btn-block btn-primary mt-4">ВЫБРАТЬ КОМПЛЕКТ</button>
						</p>				  	  
					</>
		        </div>
		      </div>
		    </div>
	    </>
		)
}

export default Rules;