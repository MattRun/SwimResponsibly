import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import { me } from '../../src/store/index';
import AllProducts from "../../src/components/AllProducts";

import Navigation from '../features/navbar/Navigation';
import Navbar from '../features/navbar/Navbar';
import Home2 from '../features/home/home2'
import SingleProduct from '../../src/components/SingleProduct';
import CartPage from '../../src/components/CartPage';
import Payment from '../../src/components/Checkout/Checkout';
import PaymentSuccess from '../../src/components/Checkout/PaymentSuccess';
import PaymentCancel from '../../src/components/Checkout/PaymentCancel';


const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      <Navigation />
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
              path="/shop"
              element={<AllProducts />}
            />
            <Route 
              path='/shop/:productId' 
              element={<SingleProduct />}
              />
            <Route 
              path='/cart'
              element={<CartPage />}
            />
        </Routes>
      ) : (
        <Routes>
          <Route 
          path="/" 
          element={<Home />} 
          />
            <Route
              path="/login"
              element={<AuthForm name="login" displayName="Login" />}
            />
            <Route
              path="/home"
              element={<Home />}
            />
            <Route
              path="/signup"
              element={<AuthForm name="signup" displayName="Sign Up" />}
            />
            <Route
              path="/shop"
              element={<AllProducts />}
            />
            <Route 
              path='/shop/:productId' 
              element={<SingleProduct />}
              />
            <Route 
              path='/cart'
              element={<CartPage />}
             />
             <Route path="/Checkout" element={<Payment />} />
          <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
