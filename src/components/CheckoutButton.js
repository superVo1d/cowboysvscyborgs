import React from 'react';
import { connect } from 'react-redux'
import { animated, useSpring } from 'react-spring'

const CheckoutButton = (props) => {

  function handleClick(e) {
  	e.preventDefault();
  	props.setModal(true);
  }

  const whenAppearsStyle = useSpring({
    display: props.quantity ? "block" : "none",
    config: { duration: 200 }
  });

  return (
    <animated.a onClick={(e) => handleClick(e)} href="/" className="cart position-fixed" style={whenAppearsStyle}>
      <div className="cart-number position-absolute text-center">{props.quantity}</div>
      <img src="images/shopping-cart-solid.svg" alt="shopping-cart" />
    </animated.a>
  )
}

const mapStateToProps = (state) => {
  return {
    quantity: state.quantity
  }
}

export default connect(mapStateToProps)(CheckoutButton)