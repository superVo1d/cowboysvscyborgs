import React, { useState, useEffect } from 'react';
import Input from './Input'
import emailjs from 'emailjs-com'
import Confetti from 'react-dom-confetti'

const Popup = () => {

	const config = {
	  angle: "90",
	  spread: "143",
	  startVelocity: 45,
	  elementCount: "72",
	  dragFriction: "0.07",
	  duration: "1920",
	  stagger: "2",
	  width: "29px",
	  height: "29px",
	  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
	};

	const service_id = "default_service";
	const template_id = "template_sJuHBp6H";
	const user_id = "user_o9P9lUcx6j4UUV4OOfLQ4";

	useEffect(() => {
	  const timer = setTimeout(() => {
	    setModal(true)
	  }, 3000);
	  return () => clearTimeout(timer);
	}, []);


	const [templateParams, setTemplateParams] = useState({
    	"email": "",
  	});

  	const [modalIsOpen, setModal] = useState(false);

  	const [formIsCompleted, setFormIsCompleted] = useState(false);

	function handleChange(e) {
	  setTemplateParams({...templateParams, "email": e.target.value});
	}

	function closePopupModal(e) {
	    e.preventDefault();
		
		if (e.target.className === 'checkout overlay') {
	    	setModal(false);
	    } else if (e.target.className === 'cross-btn position-fixed') {
	    	setModal(false);
	    } else if (e.target.className === 'cross-btn-icon') {
	    	setModal(false);
	    }
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (templateParams["email"] !== "") {
			setFormIsCompleted(true)
			console.log("submit")

			emailjs.send(service_id, template_id, templateParams, user_id)
      			.then((response) => {
         			console.log('SUCCESS!', response.status, response.text);
      			}, (err) => {
         			console.log('FAILED...', err);
      		});			
		}
	}

	return modalIsOpen && (
		<>
			<div style={{zIndex: 10000}}>
			<Confetti active={ formIsCompleted } config={ config }/>
			</div>
			<div onClick={(e) => closePopupModal(e)} className="checkout overlay">
		      <a onClick={(e) => closePopupModal(e)} className="cross-btn position-fixed" role="button" href="/">
		        <img className="cross-btn-icon" src="images/close.svg" alt="close" />
		      </a>
		      <div className="checkout-form popup">
		        <div className="px-3 px-sm-5 py-5 text-center">
		          {formIsCompleted ?
		          	(<h2 style={{padding: "90px 0"}}>Спасибо!</h2>)
					:
					(<>
					  <h2>У нас для тебя хорошие новости!</h2>
					  <p className="lead">Сегодня ты&nbsp;можешь купить стандартный набор по&nbsp;цене базового. Оформи подписку на&nbsp;дайджест новинок из&nbsp;мира настольных игр и&nbsp;получи невероятную выгоду.</p>
					  <div className="form-group form-group-checkout position-relative">
					  	<Input placeholder="Ваша электропочта" value={templateParams.email} handleChange={handleChange} name="email" align="center"/>
						<p className="lead pt-2">
							<button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-lg btn-block btn-primary mt-4">ПОЛУЧИТЬ</button>
						</p>
					  </div>
					</>)}
		        </div>
		      </div>
		    </div>
	    </>
		)
}

export default Popup;