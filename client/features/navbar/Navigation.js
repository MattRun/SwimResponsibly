import { Outlet, Link, useNavigate } from "react-router-dom";
import React, { Fragment }from "react";
import './navigation.styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../src/store/index';

const Navigation = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/home');
    window.location.reload();

    // localStorage.removeItem('cartItems')
    // .then(() => {
    //   navigate('/home');
    // })
    // .catch((error) => {
    //   // Handle any errors that occurred while removing cart items
    //   console.log(error);
    // });
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
            <Link className="nav-link" to="/cart">
              CART
            </Link>
            {isAdmin && <Link className="nav-link" to="/admin">
              Admin
            </Link>} 
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
            <Link className="nav-link" to="/cart">
              CART
            </Link>
          </div>
        )}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;