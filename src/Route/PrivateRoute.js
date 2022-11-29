import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContexts';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    if (user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{from:location}}replace></Navigate>
};

export default PrivateRoute;    