/**
 *  @version 1.0.0
 *  @author Alexis grupo hannan
 *  @description Manejo de todas las rutas privadas
*/
import React from 'react';
import { verifySession }    from './sessions';
import { Navigate, Outlet  }  from 'react-router-dom';


// const PrivateRoute = ({ component: Component, ...rest }) => (
const PrivateRoute = ({ element, path }) =>{
    const authed = verifySession() // isauth() returns true or false based on localStorage
  
  // const ele = authed === true ?  <Outlet /> : <Navigate to="/"  />;
  return authed === true ?  <Outlet /> : <Navigate to="/"  />;

};


export default PrivateRoute; 