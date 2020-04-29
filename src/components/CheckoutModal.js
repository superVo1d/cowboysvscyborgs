import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux'

import CartItem from './CartItem';
import CheckoutModalForm from './CheckoutModalForm';
import { removeItem } from './actions/cartActions';

const CheckoutModal = (props) => {

  const addedItems = props.items.map(item => (
    <CartItem id={item.id} title={item.title} quantity={item.quantity} price={item.price} key={item.id} />
  ));

  const [orderIsCompleted, setOrderIsCompleted] = useState(false);

  useEffect(() => {

    $('.item-delete-btn').mouseenter(function() {
      $(this).children('img').attr('src', 'images/cross-active.svg');
    }).mouseleave(function() {
      $(this).children('img').attr('src', 'images/cross.svg');
    })

    $('.item-add-btn').mouseenter(function() {
      $(this).children('img').attr('src', 'images/plus-active.svg');
    }).mouseleave(function() {
      $(this).children('img').attr('src', 'images/plus.svg');
    })

    $('.item-substract-btn').mouseenter(function() {
      $(this).children('img').attr('src', 'images/minus-active.svg');
    }).mouseleave(function() {
      $(this).children('img').attr('src', 'images/minus.svg');
    })    
  });

  function closeCheckoutModal(e) {
    
    e.preventDefault();

    if (e.target.className === 'checkout') {
      props.setModal(false);
    } else if (e.target.className === 'cross-btn position-fixed') {
      props.setModal(false);
    } else if (e.target.className === 'cross-btn-icon') {
      props.setModal(false);
    }

    if (orderIsCompleted) {
      props.items.forEach(item => props.removeItem(item.id));
    }
  }
  
  return (
    <div className="checkout" onClick={(e) => closeCheckoutModal(e)}>
      <a onClick={(e) => closeCheckoutModal(e)} className="cross-btn position-fixed" role="button" href="/">
        <img className="cross-btn-icon" src="images/close.svg" alt="close" />
      </a>
      <div className="checkout-form">
        <div className="px-3 px-sm-5 py-5">
          <h2>Ваш заказ:</h2>
          {(addedItems.length !== 0) ? addedItems : <p className="lead text-center">Корзина пуста</p>}
          <div className="text-right mt-4">
            <p className="lead font-weight-bold">К оплате: {props.total} руб</p>
          </div>
          <p className="lead">Мы&nbsp;вышлем вам инструкции к&nbsp;оплате на&nbsp;почту</p>
          <CheckoutModalForm setOrderIsCompleted={setOrderIsCompleted} orderIsCompleted={orderIsCompleted} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    total: state.total
  }
}

const mapDispatchToProps = (dispatch) => { 
  return{
    removeItem: (id) => {
      dispatch(removeItem(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutModal)

