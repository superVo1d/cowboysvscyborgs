import React, { useState } from 'react';
import { connect } from 'react-redux'

import CheckoutButton from './CheckoutButton.js';
import CheckoutModal from './CheckoutModal.js';

const ShoppingCart = (props) => {
	
	//const cartIsNotEmpty = props.items.length;

	const [modalIsOpen, setModal] = useState(false);

	return (
		<> 
			<CheckoutButton setModal={setModal} />
			{modalIsOpen &&
				<CheckoutModal setModal={setModal} modalIsOpen={modalIsOpen} />}
		</>
	);
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  }
}

export default connect(mapStateToProps)(ShoppingCart);