import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./home.styles.scss";

/**
 * COMPONENT
 */

const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  return (
    <div>
      

      <div className="names-container">
      <Fragment>
        {isLoggedIn && <h3>Welcome {username}</h3>}{" "}
        {/* Render the welcome message only if isLoggedIn is true */}
        {!isLoggedIn && <h3>Welcome</h3>}
      </Fragment>
  
        <h1>Brought to you by:</h1>
        <h2>Mattew Massey</h2>
        <h2>Steve Kelly</h2>
        <h2>Keith Russell</h2>
        <h2>Byron Marcatoma</h2>
      </div>
    </div>
  );
};

export default Home;
