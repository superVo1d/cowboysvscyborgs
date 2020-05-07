import React, { useState, useEffect } from 'react';
import Input from './Input'
import emailjs from 'emailjs-com'
import {CopyToClipboard} from 'react-copy-to-clipboard'

const Popup = (props) => {

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

  	const [isCopied, setIsCopied] = useState(false)

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

	const form = formIsCompleted ?
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
		</>)

    const modal = () => {
    	if (props.id === 2 || props.id === 6) {
			return (<div className="text-center">
		        		<h2>Дорогая, ни в чем себе не отказывай!</h2>
		        		<img className="w-100 py-4" src="/images/sales.jpg" style={{maxWidth: "300px"}} />
						<p className="lead">Если при покупке ты введешь наш секретрный код, то сможешь получить стандартный набор по&nbsp;цене базового!</p>
						<h3 className="mt-4">ASHOT69</h3>
						<p className="lead pt-2">
						<CopyToClipboard text="ASHOT69" onCopy={() => setIsCopied(true)}>
				          <button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-lg btn-block btn-secondary mt-4">{isCopied ? "КОД СКОПИРОВАН" : "КОПИРОВАТЬ КОД"}</button>
				        </CopyToClipboard>
						</p>
				</div>)
		} else if (props.id === 1) {
			return (<div className="text-center">
		        		<h2>Добро пожаловать снова!</h2>
						<p className="lead">Если при покупке ты введешь наш секретрный код, то сможешь получить стандартный набор по&nbsp;цене базового!</p>
						<h3 className="mt-4">ASHOT69</h3>
						<p className="lead pt-2">
						<CopyToClipboard text="ASHOT69" onCopy={() => setIsCopied(true)}>
				          <button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-lg btn-block btn-secondary mt-4">{isCopied ? "КОД СКОПИРОВАН" : "КОПИРОВАТЬ КОД"}</button>
				        </CopyToClipboard>
						</p>
				</div>)
		}
		else {
			return form
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
		        {modal()}
		        </div>
		      </div>
		    </div>
	    </>
		)
}

export default Popup;