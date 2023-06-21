import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';


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

