import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import "./Navigation.css";
import { logout } from "../JS/actions";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.token);
  const loading = useSelector((state) => state.userReducer.loading);

  const history = useHistory();

  const logoutUser = async () => {
    try {
      await dispatch(logout({}));
      history.push("/login");
    } catch (error) {}
  };
  return (
    <>
      {isAuth ? (
        <div>
          <Navbar className='first-nav' expand="lg">
            <Nav className=" mr-auto">
              <Nav.Link
                href="/"
                style={{
                  marginLeft: "100px",
                  color: "#fff",
                  fontSize: "20px",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                La gestion commerciale simple, puissante et rapide
              </Nav.Link>
            </Nav>

            <button className="mx-4 btn btn-newbtn" onClick={logoutUser}>
              Déconnexion
            </button>
          </Navbar>
        </div>
      ) : (
        <div>
          <Navbar
            expand="lg"
            style={{
              backgroundColor: "#254E58",
              position: "fixed",
              top: 0,
              width: "100%",
              zIndex: "3",
            }}
          >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link
                  href="/"
                  style={{
                    marginLeft: "100px",
                    color: "#fff",
                    fontSize: "20px",
                    fontStyle: "italic",
                    fontWeight: "bold",
                  }}
                >
                  La gestion commerciale simple, puissante et rapide
                </Nav.Link>
              </Nav>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button className="btn btn-newbtn">Inscription</button>
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button className="mx-4 btn btn-newbtn">Connexion</button>
              </Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
      )}
    </>
  );
};

export default Navigation;
