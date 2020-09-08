import React from "react";

import SigninUsername from './username';
import SigninPassword from './password';
import { useSelector } from 'react-redux'

function Signin() {
    const isUsernameVerified = useSelector(state => state.isUsernameVerified)
    return isUsernameVerified ?
        <SigninPassword /> :
        <SigninUsername />
}

export default Signin