import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Input from './Input'

import { connect } from 'react-redux'

const CheckoutModalForm = (props) => {

  const [templateParams, setTemplateParams] = useState({
    "name": "",
    "email": "",
    "code": "",
    "order": props.items
  });

  const formIsFilled = (props.items.length !== 0) && (templateParams["name"] !== "") && (templateParams["email"] !== "");

  const service_id = "default_service";
  const template_id = "order";
  const user_id = "user_o9P9lUcx6j4UUV4OOfLQ4";

  function handleSubmit(e) {

    e.preventDefault();

    let objToSend = {
      "name": templateParams["name"],
      "email": templateParams["email"],
      "code": templateParams["code"],
      "order": JSON.stringify(templateParams["order"])
    }

    props.setOrderIsCompleted(true);

    if (formIsFilled) {
      emailjs.send(service_id, template_id, objToSend, user_id)
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
         
         setTemplateParams({
            "name": "",
            "email": "",
            "code": "",
            "order": []
          });

      }, (err) => {
         console.log('FAILED...', err);
      });
    }
  }

  function handleChange(e) {
    if (e.target.name === "name") {
      setTemplateParams({...templateParams, "name": e.target.value});
    } else if (e.target.name === "email") {
      setTemplateParams({...templateParams, "email": e.target.value});
    } else if (e.target.name === "code") {
      setTemplateParams({...templateParams, "code": e.target.value});
    }
  }

  return (
    props.orderIsCompleted ?
      <h2 className="text-center pt-3">Спасибо!</h2>
    :
    	<div className="form-group form-group-checkout position-relative">

            <Input placeholder="Как к вам обращаться" value={templateParams.name} handleChange={handleChange} name="name" />
            <Input placeholder="Ваша электропочта" value={templateParams.email} handleChange={handleChange} name="email" />
            <Input placeholder="Промокод" value={templateParams.code} handleChange={handleChange} name="code" />

            <p className="lead pt-2">
              <button onClick={(e) => handleSubmit(e)} type="submit" id="call-us-btn" className={formIsFilled ? "btn btn-lg btn-block btn-primary mt-4" : "btn btn-lg btn-block btn-primary-disabled mt-4"} disabled={formIsFilled ? "" : "disabled"}>ПОДТВЕРДИТЬ ЗАКАЗ</button>
            </p>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  }
}

export default connect(mapStateToProps)(CheckoutModalForm)
