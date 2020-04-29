import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid" style={{paddingTop: "30px", paddingBottom: "90px", backgroundColor: "#6e3cb8", color: "white"}}>
      <div className="col-12 offset-lg-3 col-lg-6 px-0 px-sm-5 text-center">
        <p className="lead text-white">© 2020 г. ООО «Дедалус»</p>
        <p className="lead">
        	<a id="mailto" className="text-white" href="mailto:daedalu6@mail.ru" target="_blank" rel="noopener noreferrer">daedalu6@mail.ru</a>
  	    </p>
      </div>
    </div>
  )
}

export default Footer;