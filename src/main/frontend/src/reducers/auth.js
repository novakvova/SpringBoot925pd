import {
    LOGIN_AUTH
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
          username: "Віктор"
        };

      default:
        return auth;
    }
  };
  
  export default authReducer;