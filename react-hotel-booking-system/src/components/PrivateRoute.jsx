/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
//import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  //const user = JSON.parse(localStorage.getItem('user'));
  //console.log("FROMLS: ", user.user.role);

  // if (!user || user.role !== 'ADMIN') {
  //   // Redirect to login page if user is not logged in or doesn't have the "admin" role
  //   return <Navigate to="/login" />;
  // }

  return children;
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default PrivateRoute;
