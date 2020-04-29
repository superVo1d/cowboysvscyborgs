import React from 'react';
import { addToCart } from './actions/cartActions'
import { connect } from 'react-redux';


const AddToCartButton = (props) => {

  function handleClick() {
    props.addToCart(props.btnId);
  }

  return (
    <button onClick={handleClick} type="button" className="btn btn-primary btn-lg mr-3 mt-4" href="/">КУПИТЬ</button>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => { 
  return{
    addToCart: (id) => {
      dispatch(addToCart(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton)