import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Input from './Input'

const Feedback = () => {

  const [templateParams, setTemplateParams] = useState({
    "tel": ""
  });

  const isActive = templateParams['tel'] !== "";

  const [formIsCompleted, setFormIsCompleted] = useState(false);

  const service_id = "default_service";
  const template_id = "template_sJuHBp6H";
  const user_id = "user_o9P9lUcx6j4UUV4OOfLQ4";

  function handleClick(e) {
    e.preventDefault();

    if (isActive) {
      setFormIsCompleted(true)

      emailjs.send(service_id, template_id, templateParams, user_id)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
         console.log('FAILED...', err);
      });
    }
  }

  function handleChange(e) {
    setTemplateParams({"tel": e.target.value});
  }

  return (
    <div className="container-fluid" id="feedback" style={{paddingTop: "120px", paddingBottom: "90px", backgroundColor: "#6e3cb8", color: "white"}}>
      <div className="row m-w-container">
        <div className="col offset offset-lg-3 col-lg-6 px-0 px-sm-5 text-center">
        {formIsCompleted ?
          <> 
            <h2>СПАСИБО!</h2>
            <p className="lead text-white pt-5">Наш менеджер скоро свяжемся с вами</p>
          </>
        :
          <>
            <h2>ОСТАЛИСЬ ВОПРОСЫ?</h2>
            <p className="lead text-white pt-5">Оставьте нам телефон и мы скоро свяжемся с вами</p>
            <form id="form" className="pt-4" action="" method="POST" encType="multipart/form-data">
              <div className="form-group form-group-feedback">
                
                <Input placeholder="Ваш телефон" value={templateParams.tel} handleChange={handleChange} name="tel" align="center" />
                
                <p className="lead pt-2">
                  <button onClick={(e) => handleClick(e)} type="submit" id="call-us-btn" className="btn btn-lg btn-block btn-secondary mt-4" disabled={isActive ? "" : "disabled"}>ЗАКАЗАТЬ ЗВОНОК</button>
                </p>
              </div>
            </form>
          </>
        }
        </div>
      </div>
    </div>
  )
}

export default Feedback;