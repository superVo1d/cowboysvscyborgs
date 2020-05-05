import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'
import '../rating.scss'

const Rating = () => {

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
    	"rating1": 0,
    	"rating2": 0,
    	"rating3": 0,
    	"rating4": 0,
  	});

  	const [modalIsOpen, setModal] = useState(false);

  	const [formIsCompleted, setFormIsCompleted] = useState(false);

	function handleChange(e) {
	  setTemplateParams({...templateParams, "rating": e.target.value});
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

		if (templateParams["rating"] !== 0) {
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
					  <h2>Пожалуйста, оцените наш сайт!</h2>
					  <div className="form-group form-group-checkout position-relative">
					  	<p className="lead pb-0 pt-4">Дизайн</p>
						<div className="rating">
							<input onChange={(e) => setTemplateParams({...templateParams, "rating1": e.target.value})} type="radio" id="star5" name="rating" value="1" checked={templateParams["rating1"] >= 1} /><label htmlFor="star1"></label>
							<input onChange={(e) => setTemplateParams({...templateParams, "rating1": e.target.value})} type="radio" id="star4" name="rating" value="2" checked={templateParams["rating1"] >= 2} /><label htmlFor="star2"></label>
							<input onChange={(e) => setTemplateParams({...templateParams, "rating1": e.target.value})} type="radio" id="star3" name="rating" value="3" checked={templateParams["rating1"] >= 3} /><label htmlFor="star3"></label>
							<input onChange={(e) => setTemplateParams({...templateParams, "rating1": e.target.value})} type="radio" id="star2" name="rating" value="4" checked={templateParams["rating1"] >= 4} /><label htmlFor="star4"></label>
							<input onChange={(e) => setTemplateParams({...templateParams, "rating1": e.target.value})} type="radio" id="star1" name="rating" value="5" checked={templateParams["rating1"] >= 5} /><label htmlFor="star5"></label>
						</div>
						<p className="lead pt-2">
							<button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-lg btn-block btn-primary mt-4">ОЦЕНИТЬ</button>
						</p>
					  </div>
					</>)}
		        </div>
		      </div>
		    </div>
	    </>
		)
}

export default Rating;