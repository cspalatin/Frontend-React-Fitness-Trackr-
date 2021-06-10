import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  HOME_ROUTE,
  ROUTINES_ROUTE,
  MY_ROUTINES_ROUTE,
  ACTIVITIES_ROUTE,
} from "../constants";

const Navigation = () => {
  return (
    <AppBar>
      <Toolbar>
        <Link to={HOME_ROUTE}>Home</Link>
        <Link to={ROUTINES_ROUTE}>Routines</Link>
        <Link to={MY_ROUTINES_ROUTE}>My Routines</Link>
        <Link to={ACTIVITIES_ROUTE}>Activities</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
