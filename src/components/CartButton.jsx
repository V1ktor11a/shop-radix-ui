import React from 'react';
import './CartButton.css';

const CartButton = ({ itemCount }) => {
  return (
    <div className='cart-button'>
      <button className='button'>
        <span role='img' aria-label='cart'>
          🛒
        </span>
        {itemCount > 0 && <span className='badge'>{itemCount}</span>}
      </button>
    </div>
  );
};

export default CartButton;
