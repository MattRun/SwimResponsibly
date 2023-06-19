import { Outlet, Link, useNavigate } from "react-router-dom";
import React from "react";
import { Fragment } from "react";
import './navigation.styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../src/store/index';
import Home from "../home/Home";
import Admin from "../../../src/components/Admin/Admin";

const Navigation = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/home');
  };

  return (
    <Fragment>
      <div className="navigation">
        <h1 className='Header'>Brooklyn Street Art</h1>
        <Link className="logo-container" to="/home">
          <span>Logo</span>
        </Link>
        <Link className="logo-container" to="/shop">
          <span>Gallery</span>
        </Link>
        {isLoggedIn ? (
          <Fragment>
            <div className="nav-links-container">
            {isAdmin && <Link className="nav-link" to="/admin">
              Admin
            </Link>} 
              <button type="button" className="fa-solid fa-cart-shopping">cart</button>
              <button type="button" onClick={logoutAndRedirectHome}>
                Logout
              </button>
              
            </div>
           
          </Fragment>
        ) : (
          <div className="nav-links-container">
            <Link className="nav-link" to="/login">
              SIGN IN
            </Link>
            <Link className="nav-link" to="/signup">
              SIGN UP
            </Link>
            <button type="button" className="fa-solid fa-cart-shopping">cart</button>
          </div>
        )}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
