import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
import { Nav, Navbar } from "react-bootstrap";
const Profile = () => {
  const isAuth = useSelector((state) => state.userReducer.token);
  const userData = useSelector((state) => state.userReducer.user);

  return (
    <>
     
        <>
          <Navbar expand="lg" className="second-navbar">
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
                DASHBOARD
              </Nav.Link>
            </Nav>
          </Navbar>
          <div style={{ height: "700px", backgroundColor: "#88BDBC" }}>
           
            <h4 style={{ padding: "70px 100px", fontWeight: "900" }}>
        
              {userData.name} Dashboard 
            </h4>
          </div>
        </>
    </>
  );
};

export default Profile;
