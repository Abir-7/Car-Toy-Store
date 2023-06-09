import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../AuthProvider/AuthProvider';

const PrivetRouts = ({children}) => {
    const location = useLocation();

    const { user, loader } = useContext(Authcontext)
    if (loader) {
      return <progress className="progress "></progress>
    }
  
  
    if (user) {
      return children
    }
    else {

      return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivetRouts;