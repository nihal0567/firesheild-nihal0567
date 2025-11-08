import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading } = use(AuthContext)
 //   console.log(user);
 const location = useLocation()


    if (loading) {
        return <span className="loading loading-infinity loading-xl"></span>
    }

    if (user && user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>

    
};

export default PrivateRoute;