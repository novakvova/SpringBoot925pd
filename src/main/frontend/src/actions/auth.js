import authSerivce from "../services/auth.serivce";
import {
    LOGIN_AUTH, LOGOUT_AUTH, REGISTER_AUTH
  } from "./types";

  export const loginUser = (data) => async (dispatch) => {
    try {
      const res = await authSerivce.login(data);
  
      console.log("token", res.data.username);

      localStorage.setItem("user", res.data.fullName);

      return userAuth(res.data, dispatch);

    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const registerUser = (data) => async (dispatch) => {
    try {
      const res = await authSerivce.register(data);

      dispatch({
        type: REGISTER_AUTH,
        payload: res.data,
      });

      console.log("token", res.data.username);

      localStorage.setItem("user", res.data.fullName);

      return userAuth(res.data, dispatch);

    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const logoutUser = () => (dispatch) => {

    //localStorage.removeItem("user");
    dispatch({
      type: LOGOUT_AUTH,
    });

  };

  export const userAuth = (user, dispatch) => {

    
    dispatch({
      type: LOGIN_AUTH,
      payload: user,
    });

    return Promise.resolve(user);

  };