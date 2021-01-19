import {
  REGISTER_USER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_LOAD,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_LOAD,
  LOGOUT_SUCCESS,
} from "../constants/actions-types";

import cogoToast from "cogo-toast";
import axios from "axios";

const initialState = {
  user: null,
  loading: false,
  token: "",
  errors: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  // const checkLoggedIn = async () => {
  //   let token = localStorage.getItem("auth-token");
  //   if (token === null) {
  //     localStorage.setItem("auth-token", "");
  //     token = "";
  //   }
  //   /* const tokenRes = await axios.post("/user/tokenIsValid", null, {
  //     headers: { "x-auth-token": token },
  //   }); */
    
  //     const userRes = await axios.get("/user", {
  //       headers: { "x-auth-token": token },
  //     });
  //     return userRes.data 
    
  // };
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      cogoToast.success("Inscription réussite");
      return {
        ...state,
        loading: false,
        user: payload.user,
      };
    case REGISTER_FAIL:
      cogoToast.error("Something went wrong ...");
      return {
        ...state,
        loading: false,
        errors: payload.user,
      };
    case LOGIN_LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.token,
        user: payload.user,
      };
    case LOGIN_FAIL:
      cogoToast.error("Vérifier votre email ou mot de passe");
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case LOGOUT_LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        token: "",
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
