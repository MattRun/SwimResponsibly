
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../reducers/cart/cart.selector';
import { setIsCartOpen } from '../../reducers/cart/cart.reducer';



import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartIconContainer, ItemCount } from './cart-icon.styles.jsx';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const toogleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));


  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
        {/* <ShoppingIcon className="shopping-icon" />  */}
       <ItemCount>{cartCount}</ItemCount> 
    </CartIconContainer>
  );
};

export default CartIcon;
