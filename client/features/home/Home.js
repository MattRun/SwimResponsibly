import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../navbar/Navbar'
import Navigation from '../navbar/Navigation';
import AllProducts from '../../../src/components/AllProducts';
// import { Link, useNavigate } from 'react-router-dom';
// // import { logout } from '../../app/store';
// import { logout } from '../auth/authSlice';
// import { AllProduct, HomePage } from '../../../src/components';



/**
 * COMPONENT
*/

const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  return (
    <div>
      <Fragment>
        {isLoggedIn && <h3>Welcome {username},</h3>} {/* Render the welcome message only if isLoggedIn is true */}
        {!isLoggedIn && <h3>Welcome</h3>} {/* Render the welcome message only if isLoggedIn is false */}

      </Fragment>
    </div>
  );
};

export default Home;

