import authSerivce from "../services/auth.serivce";
import {
    LOGIN_AUTH
  } from "./types";

  export const loginUser = (data) => async (dispatch) => {
    try {
      const res = await authSerivce.login(data);
  
      console.log("token", res.data.username);
      dispatch({
        type: LOGIN_AUTH,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);

    } catch (err) {
      return Promise.reject(err);
    }
  };