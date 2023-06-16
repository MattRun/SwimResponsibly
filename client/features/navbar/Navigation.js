import { Outlet, Link } from "react-router-dom";
import React from "react";
import { Fragment } from "react";


const Navigation = () => {
 
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/home">
          <span>Logo</span>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/allproducts">
            SHOP
          </Link>
          
          <Link className="nav-link" to='/login'>
            SIGN IN
          </Link>
          
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;