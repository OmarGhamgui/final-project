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
// import {useHistory} from 'react-router-dom'

import cogoToast from "cogo-toast";

const initialState = {
  loading: false,
  token :"",
  user: {},
  errors: null,
};

const userReducer = (state = initialState, { type, payload }) => {

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
      // localStorage.setItem("token", payload.token);
      return {
        ...state,
        token:payload.token,
        loading: false,
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
      // localStorage.removeItem("token");
      // localStorage.removeItem("userId");
      return {
        ...state,
        token:'',
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
