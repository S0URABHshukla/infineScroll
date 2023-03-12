import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const {isAuth}=useSelector((store) => store );
    if(!isAuth)
    {
        return <Navigate to={'/login'}/>
    } 
    else
    {
        return children;
    }
}

export default PrivateRoute