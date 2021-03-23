import React from 'react';
import { connect } from 'react-redux'

import { removeItem, addQuantity, subtractQuantity} from './actions/cartActions'


const CartItem = (props) => {
  
  function handleItemSubstract(e) {
    e.preventDefault();
    props.subtractQuantity(props.id);
    console.log('Item substracted');
  }

  function handleItemAdd(e) {
    e.preventDefault();
    props.addQuantity(props.id);
    console.log('Item added');
  }

  function handleItemRemove(e) {
    e.preventDefault();
    props.removeItem(props.id);
    console.log('Item removed');
  }

  return (
    <div className="cart-item d-flex justify-content-between mt-4" style={{borderBottom: "1px solid rgb(200, 203, 207)"}}>
    	<p className="item-name lead font-weight-bold mr-4 text-break">
    		{props.title}
		  </p>
    	<p className="item-btn-group lead text-right">
      		<a onClick={(e) => handleItemSubstract(e)} className="item-substract-btn" href="/" role="button">
        		<img src="https://supervo1d.github.io/cowboysvscyborgs/images/minus.svg" alt="minus" />
      		</a>
      		<span className="item-quantity">
        		{props.quantity}
      		</span>
		      <a onClick={(e) => handleItemAdd(e)} className="item-add-btn" href="/" role="button">
		        <img src="https://supervo1d.github.io/cowboysvscyborgs/images/plus.svg" alt="plus" />
			    </a>
    			<span className="item-price">
    			  {props.quantity * props.price}
    			</span>
    			<a onClick={(e) => handleItemRemove(e)} className="item-delete-btn" href="/" role="button">
    			  <img src="https://supervo1d.github.io/cowboysvscyborgs/images/cross.svg" alt="delete" />
    			</a>
		  </p>
  </div>
  )
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => {dispatch(removeItem(id))},
        addQuantity: (id) => {dispatch(addQuantity(id))},
        subtractQuantity: (id) => {dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartItem)
