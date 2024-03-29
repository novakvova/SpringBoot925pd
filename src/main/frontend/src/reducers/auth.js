import {
    LOGIN_AUTH, LOGOUT_AUTH, REGISTER_AUTH
  } from "../actions/types";
  
  const initialState = {
    isAuth: false,
    username: ""
  };
  
  function authReducer(auth = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {

      case LOGIN_AUTH:
        return {
          isAuth: true,
          username: payload.fullName
        };

      case REGISTER_AUTH:
        return auth;

      case LOGOUT_AUTH:
        return {
          isAuth: false,
          username: ""
        };

      default:
        return auth;
    }
  };
  
  export default authReducer;