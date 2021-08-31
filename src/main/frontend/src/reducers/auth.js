import {
    LOGIN_AUTH
  } from "../actions/types";
  
  const initialState = [];
  
  function authReducer(auth = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {

      case LOGIN_AUTH:
        return [...auth, payload];

      default:
        return auth;
    }
  };
  
  export default authReducer;