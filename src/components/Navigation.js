import { useEffect, useState } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  ACTIVITIES_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  MY_ROUTINES_ROUTE,
  REGISTER_ROUTE,
  ROUTINES_ROUTE,
} from "../constants";
import "./Navigation.css";

const Navigation = ({ authenticated, setAuthenticated }) => {
  function handleLogOut() {
    localStorage.removeItem("token");
    setAuthenticated(false);
  }

  return (
    <div className="Nav-Bar">
      <AppBar>
        <Toolbar>
          {authenticated ? (
            <>
              <Link to={HOME_ROUTE}>Home</Link>
              <Link to={ROUTINES_ROUTE}>Routines</Link>
              <Link to={MY_ROUTINES_ROUTE}>My Routines</Link>
              <Link to={ACTIVITIES_ROUTE}>Activities</Link>
              <Link to={HOME_ROUTE} onClick={handleLogOut}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to={HOME_ROUTE}>Home</Link>
              <Link to={ROUTINES_ROUTE}>Routines</Link>
              <Link to={ACTIVITIES_ROUTE}>Activities</Link>
              <Link to={LOGIN_ROUTE}>Login</Link>
              <Link to={REGISTER_ROUTE}>Register</Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
