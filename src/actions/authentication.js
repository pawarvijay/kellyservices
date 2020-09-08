import { SET_PASSWORD_VERIFICATION, SET_USERNAME_VERIFICATION, SAVE_USER } from '../types/types';

function saveUser(payload) {
    return {
        type: SAVE_USER,
        payload
    }
}

function setPasswordVerification(payload) {
    return {
        type: SET_PASSWORD_VERIFICATION,
        payload
    }
}

function setUsernameVerification(payload) {
    return {
        type: SET_USERNAME_VERIFICATION,
        payload
    }
}

function verifyUsername(values) {
    return (dispatch, state) => {
        if (values.username == state().user.username) {
            dispatch(setUsernameVerification(true))
            return true
        }
        return false
    }
}

function verifyPassword(values) {
    return (dispatch, state) => {
        if (values.password == state().user.password) {
            dispatch(setPasswordVerification(true))
            return true
        }
        return false
    }
}

export {
    saveUser,
    setPasswordVerification,
    setUsernameVerification,
    verifyUsername,
    verifyPassword
}