import {
  LOGIN_FAIL,
  LOGIN_LOAD,
  LOGIN_SUCCESS,
  LOGOUT_LOAD,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_USER,
} from "../constants/actions-types";
import axios from "axios";

import { history } from "../../history"
export const register = (newUser) => async (dispatch) => {
  await dispatch({
    type: REGISTER_USER,
  });
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const addRes = await axios.post("/user/register", newUser);
    await history.push('/login')
    dispatch({
      type: REGISTER_SUCCESS,
      payload: addRes.data,
    });

  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};
export const login = (input) => async (dispatch) => {
  dispatch({
    type: LOGIN_LOAD,
  });
  try {

    await new Promise((resolve) => setTimeout(resolve, 1000));
    const loginRes = await axios.post("/user/login", input);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: loginRes.data,
    });
    localStorage.setItem('userId', loginRes.data.user.id)
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response,
    });
  }
};
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT_LOAD,
  });
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch({
      type: LOGOUT_SUCCESS,
    });
    localStorage.removeItem("userId");
  } catch (error) { }
};
