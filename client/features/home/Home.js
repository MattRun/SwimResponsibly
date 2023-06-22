import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import YouTube from 'react-youtube';

/**
 * COMPONENT
*/

const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  const videoId = 'L-C_-8LQ-78'; // Replace with the actual YouTube video ID

  return (
    <div>
      {isLoggedIn && <h3>Welcome {username},</h3>}
      {!isLoggedIn && <h3>Welcome</h3>}
      
      {/* Embed the YouTube video */}
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Home;

