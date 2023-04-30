import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
import Home from '../routes/Home';
import SignIn from '../routes/Signin';

export const PrivateRoute = () => {
    const authenticated = false; // determine if authorized, from context or however you're doing it
    return authenticated ? <Home /> : <Home />;
}
export const LoginRoute = () => {
    const authenticated = false; // determine if authorized, from context or however you're doing it
    return authenticated ? <Home /> : <SignIn />;
}