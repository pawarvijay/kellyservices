import { SET_PASSWORD_VERIFICATION, SET_USERNAME_VERIFICATION, SAVE_USER } from '../types/types';

const initialState = { user: '', isUsernameVerified: false, isPasswordVerified: false }

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER:
      return { ...state, user: action.payload };
    case SET_USERNAME_VERIFICATION:
      return { ...state, isUsernameVerified: action.payload };
    case SET_PASSWORD_VERIFICATION:
      return { ...state, isPasswordVerified: action.payload };
    default:
      return state;
  }
}

export default reducer;