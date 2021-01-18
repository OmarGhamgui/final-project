import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
const Profile = () => {
  const isAuth = useSelector((state) => state.userReducer.token);
  const userData = useSelector((state) => state.userReducer.user);

  return (
    <>
      {!isAuth ? (
        <Redirect to="/" />
      ) : (
        <div style={{ height: "700px", backgroundColor: "#88BDBC" }}>
          <SideNav className="side">
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="home">
                <NavIcon>
                  <i
                    className="fa fa-fw fa-home"
                    style={{ fontSize: "1.75em" }}
                  />
                </NavIcon>
                <NavText>Home</NavText>
              </NavItem>
              <NavItem eventKey="charts">
                <NavIcon>
                  <i
                    className="fa fa-fw fa-line-chart"
                    style={{ fontSize: "1.75em" }}
                  />
                </NavIcon>
                <NavText>Charts</NavText>
                <NavItem eventKey="charts/linechart">
                  <NavText>Line Chart</NavText>
                </NavItem>
                <NavItem eventKey="charts/barchart">
                  <NavText>Bar Chart</NavText>
                </NavItem>
              </NavItem>
            </SideNav.Nav>
          </SideNav>
          <h1 style={{ paddingTop: "300px" }}>WELCOME {userData.name}</h1>
        </div>
      )}
    </>
  );
};

export default Profile;
