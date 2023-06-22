import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import { me } from "../../src/store/index";
import AllProducts from "../../src/components/AllProducts";
import SingleProduct from "../../src/components/SingleProduct";
import CartPage from "../../src/components/CartPage";
import Admin from "../../src/components/Admin/Admin";
import UpdateProductForm from "../../src/components/Admin/UpdateFeature/UpdateProduct";
import Navigation from '../features/navbar/Navigation';
import Payment from '../../src/components/Checkout/Checkout';
import PaymentSuccess from '../../src/components/Checkout/PaymentSuccess';


const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<AllProducts />} />
          <Route path="/shop/:productId" element={<SingleProduct />} />
          <Route path="/cart" element={<CartPage />} />

          {isLoggedIn && isAdmin && (
            <>
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/:productId" element={<UpdateProductForm />} />
              <Route path="/Checkout" element={<Payment />} />
              <Route path="/PaymentSuccess" element={<PaymentSuccess />} /> 
            </>
          )}
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
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
            {isLoggedIn && isAdmin && (
          <>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/:productId" element={<UpdateProductForm  />} />
          </>
          
        )}
          <Route path="/Checkout" element={<Payment />} />
          <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
