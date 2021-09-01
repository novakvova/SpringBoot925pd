import authSerivce from "../services/auth.serivce";
import {
    LOGIN_AUTH
  } from "./types";

  export const loginUser = (email, password) => async (dispatch) => {
    try {
      //const res = await authSerivce.login({ email, password });
  
      dispatch({
        type: LOGIN_AUTH
        //payload: res.data,
      });
  
      //return Promise.resolve(res.data);

    } catch (err) {
      return Promise.reject(err);
    }
  };