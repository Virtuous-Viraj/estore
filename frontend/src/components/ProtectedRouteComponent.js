import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import UserChatComponent from './user/UserChatComponent';
function ProtectedRouteComponent({ admin }) {
    if (admin) {
        let adminAuth = true;
        return adminAuth ? <Outlet /> : <Navigate to="/login" />
    }
    else if(!admin) {
        let userAuth = true;
        return userAuth ? <><UserChatComponent /><Outlet /> </> : <Navigate to="/login" />
    }

}

export default ProtectedRouteComponent;