import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import { me } from '../../src/store/index';
import AllProducts from '../../src/components/AllProducts';
import Navigation from '../features/navbar/Navigation';
import SingleProduct from '../../src/components/SingleProduct';
import Admin from '../../src/components/Admin/Admin';
import UpdateProductForm from '../../src/components/Admin/UpdateFeature/UpdateProduct';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<AllProducts />} />
        <Route path="/shop/:productId" element={<SingleProduct />} />

        {isLoggedIn && isAdmin && (
          <>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/:productId" element={<UpdateProductForm  />} />
          </>
          
        )}

        

        {!isLoggedIn && (
          <>
            <Route path="/login" element={<AuthForm name="login" displayName="Login" />} />
            <Route path="/signup" element={<AuthForm name="signup" displayName="Sign Up" />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default AppRoutes;
