import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { register } from "../JS/actions";
import { useDispatch, useSelector } from "react-redux";
import "./Registerpage.css";
import { Redirect } from "react-router-dom";

const RegisterPage = () => {
  const isAuth = useSelector(state=>state.userReducer.token);
  const loading = useSelector((state) => state.userReducer.loading);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const registerUser = (e) => {
    dispatch(
      register({
        name,
        email,
        password,
        phoneNumber,
      })
    )
  };
  return (
    <>
      {isAuth? <Redirect to="/profile"/> :  loading ? (
        <div>
          <div className="corps">
            <div className="col-md-6 offset-md-3">
              <div className="header1 row pt-5">
                <div className="mx-auto d-flex" >
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
                <br /> <br /> <br />
              </div>
              <br /> <br /> <br />
            </div>
          </div>
        </div>
      ) : (
        <div className="corps">
          <div className="col-md-6 offset-md-3">
            <div className="header1 row pt-5">
              <h1>Veuillez remplir les champs au dessous</h1>
            </div>
            <div className="row mt-2">
              <input
                type="text"
                name="name"
                style={{ width: "100%" }}
                placeholder="nom et prénom"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="row mt-2">
              <input
                type="email"
                style={{ width: "100%" }}
                name="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="row mt-2">
              <input
                type="password"
                style={{ width: "100%" }}
                name="password"
                placeholder="mot de passe"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="row mt-2">
              <input
                style={{ width: "100%" }}
                type="phoneNumber"
                name="phoneNumber"
                placeholder="Numéro de téléphone"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="row mt-2 pb-5 pt-3">
              <button
                type="submit"
                className="d-flex mx-auto btn btn-newbtn"
                onClick={registerUser}
              >
                Créer mon compte
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterPage;
