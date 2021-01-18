import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { login } from "../JS/actions";
import { useDispatch, useSelector } from "react-redux";
import "./Loginpage.css";
import { Redirect } from "react-router-dom";

const LoginPage = () => {
  const isAuth = useSelector(state => state.userReducer.token);
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user)
  const dispatch = useDispatch();
  const [email, setEmail] = useState(user ? user.email : "");
  const [password, setPassword] = useState("");
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
      })
    );
    
  };

  return (
    <>
      {isAuth ? (
        <Redirect to="/profile" />
      ) : loading ? (
        <div>
          <div className="corps">
            <div className="col-md-6 offset-md-3">
              <div className="header1 row pt-5">
                <div className="mx-auto d-flex">
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
                  <h1>Connectez vous</h1>
                </div>

                <div className="row mt-2">
                  <input
                    type="email"
                    style={{ width: "100%" }}
                    name="email"
                    placeholder="email"
                    value={email}
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

                <div className="row mt-2 pb-5 pt-3">
                  <button
                    type="submit"
                    className="d-flex mx-auto btn btn-newbtn"
                    onClick={loginUser}
                  >
                    Connexion{" "}
                  </button>
                </div>
              </div>
            </div>
          )}
    </>
  );
};

export default LoginPage;
