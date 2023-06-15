import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import { me } from './store';
import AllProduct from '../../src/components/AllProduct';
import Navigation from '../features/navbar/Navigation';
import Navbar from '../features/navbar/Navbar';
import Home2 from '../features/home/home2'
/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Navigation />} >
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/home"
            element={<Home2/>}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route
            path="/allproducts"
            element={<AllProduct />}
          />

</Route>
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
