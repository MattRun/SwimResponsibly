import React from 'react';
import { CartItemContainer, ItemDetails } from './cart-items.styles.jsx';



const CartItem = ({ product }) => {
    console.log(product)
    console.log("hello")

  
  return (
    <CartItemContainer>
      {/* <img src={product.imageUrl} alt={`${product.title}`} /> */}
      <ItemDetails>
        <span>{product.title}</span>
        <span>
          {/* {quantity} x ${price} */}
          Hello
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;