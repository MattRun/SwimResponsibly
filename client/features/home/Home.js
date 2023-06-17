// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// // import { logout } from '../../app/store';
// import { logout } from '../auth/authSlice';
// import { AllProduct, HomePage } from '../../../src/components';



/**
 * COMPONENT
*/

const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <h3>Welcome, {username}</h3>
    </div>
  );
};

export default Home;

// const Home = (props) => {
//   const username = useSelector((state) => state.auth.me.username);
//   const isLoggedIn = useSelector((state) => !!state.auth.me.id);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const logoutAndRedirectHome = () => {
//     dispatch(logout());
//     navigate('/login');
//   };

//   return (
//     <div>
//          <div>
//         <HomePage />
//         {/* <Main /> */}
//       <nav>
//         {isLoggedIn ? (
//           <div>
//             {/* The navbar will show these links after you log in */}
//             <Link to="/home">Home</Link>
//             <button type="button" onClick={logoutAndRedirectHome}>
//               Logout
//             </button>
//           </div>
//         ) : (
//           <div>
//             {/* The navbar will show these links before you log in */}
//             <Link to="/login">Login</Link>
//             <Link to="/signup">Sign Up</Link>
//           </div>
//         )}
//       </nav>
//       <hr />
//     </div>
//     <div>
//       <h3>Welcome, {username}</h3>
//     </div>
//     <AllProduct />
//     </div>
//   );
// };

// export default Home;
