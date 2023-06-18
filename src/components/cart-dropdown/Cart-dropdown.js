import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';

import { selectCartItems } from '../../reducers/cart/cart.selector';
import { fetchCartItems } from '../../reducers/cart/cart.reducer';
import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles.jsx';
import CartItem from '../cart-item/CartItem';

const CartDropdown = () => {

    const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  useEffect(() =>{
    dispatch(fetchCartItems());
  },[dispatch])

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <button onClick={goToCheckoutHandler}>GO TO CHECKOUT</button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;